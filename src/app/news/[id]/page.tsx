import { Metadata, ResolvingMetadata } from 'next';
import NewsPage from '@/components/News/NewsPage';
import axios from 'axios';
import { extractIdFromSlug } from '@/utils/extractIdFromSlug';

type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

const fetchNewsData = async (slug: string) => {
    const id = extractIdFromSlug(slug);
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-news/${id}`;
    const response = await axios.get(url);
    if (response.status !== 200) {
        throw new Error('Failed to fetch news data');
    }
    return response.data;
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const slug = params.id;
    const news = await fetchNewsData(slug);

    const firstParagraph = news.news_data.blocks.find((block: any) => block.type === 'paragraph')?.data?.text;
    const firstImage = news.news_data.blocks.find((block: any) => block.type === 'image')?.data?.file?.url;
    const headerText = news.news_data.blocks.find((block: any) => block.type === 'header')?.data?.text;

    return {
        title: headerText || 'ニュース記事',
        description: firstParagraph || 'ニュース記事の詳細',
        keywords: `ニュース, 更新, ブログ, ${news.news_type}`,
        openGraph: {
            type: 'website',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/news/${slug}`,
            title: headerText || 'ニュース記事',
            description: firstParagraph || 'ニュース記事の詳細',
            images: [
                {
                    url:
                        firstImage ||
                        'https://github.com/huynhnguyen1906/Reki-Teku/blob/main/src/app/og-image.png?raw=true',
                    width: 1200,
                    height: 630,
                    alt: firstParagraph || 'ニュース記事の詳細',
                },
            ],
            siteName: '歴てく',
            locale: 'ja_JP',
        },
        twitter: {
            card: 'summary_large_image',
            site: '@rekiteku',
            creator: '@rekiteku',
            title: headerText || 'ニュース記事',
            description: firstParagraph || 'ニュース記事の詳細',
            images:
                firstImage || 'https://github.com/huynhnguyen1906/Reki-Teku/blob/main/src/app/og-image.png?raw=true',
        },
        applicationName: '歴てく',
        appleWebApp: {
            capable: true,
            title: headerText || 'ニュース記事',
            statusBarStyle: 'default',
        },
    };
}

export default async function Page({ params }: Props) {
    const newsData = await fetchNewsData(params.id);
    return <NewsPage news={newsData} />;
}
