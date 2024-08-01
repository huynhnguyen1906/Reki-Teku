// pages/tours/[id]/page.tsx
import { Metadata, ResolvingMetadata } from 'next';
import TourPage from '@/components/Tours/TourPage';
import axios from 'axios';
type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

const fetchTourData = async (id: string) => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-tour/${id}`);
    if (response.status !== 200) {
        throw new Error('Failed to fetch tour data');
    }
    return response.data;
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const id = params.id;
    const tour = await fetchTourData(id);

    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: tour.tour_info.name,
        description: tour.tour_info.description,
        keywords: `歴てく, reki-teku, 歴史, サイドストーリー, 人生, 深める, ${tour.tour_info.location}`,
        openGraph: {
            type: 'website',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/tours/${id}`,
            title: tour.tour_info.name,
            description: tour.tour_info.description,
            images: [
                {
                    url:
                        tour.schedule[0]?.destinations[0]?.image ||
                        'https://github.com/huynhnguyen1906/Reki-Teku/blob/main/src/app/og-image.png?raw=true',
                    width: 1200,
                    height: 630,
                    alt: tour.tour_info.description,
                },
            ],
            siteName: '歴てく',
            locale: 'ja_JP',
        },
        twitter: {
            card: 'summary_large_image',
            site: '@rekiteku',
            creator: '@rekiteku',
            title: tour.tour_info.name,
            description: tour.tour_info.description,
            images:
                tour.schedule[0]?.destinations[0]?.image ||
                'https://github.com/huynhnguyen1906/Reki-Teku/blob/main/src/app/og-image.png?raw=true',
        },
        applicationName: '歴てく',
        appleWebApp: {
            capable: true,
            title: tour.tour_info.name,
            statusBarStyle: 'default',
        },
        icons: {
            icon: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    sizes: '48x48',
                    url: '/favicon.ico',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    url: '/favicon-16x16.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    url: '/favicon-32x32.png',
                },
                {
                    url: '/android-chrome-192x192.png',
                    sizes: '192x192',
                },
                {
                    url: '/android-chrome-512x512.png',
                    sizes: '512x512',
                },
            ],
            apple: '/apple-touch-icon.png',
        },
    };
}

export default async function Page({ params }: Props) {
    const tourData = await fetchTourData(params.id);
    return <TourPage tour={tourData} />;
}
