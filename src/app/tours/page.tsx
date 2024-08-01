import TourViewPage from '@/components/Tours/TourViewPage';

import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: 'ツアー一覧',
        description:
            '川が大きな流れから小さく枝分かれしていくように、歴史も枝分かれしていきます。「歴てく」は、枝分かれした歴史のサイドストーリーを知る旅をあなたにご提供します。',
        keywords: '歴てく, reki-teku, 歴史, サイドストーリー, 人生, 深める, fukuoka, 福岡',
        openGraph: {
            type: 'website',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            title: 'ツアー一覧',
            description:
                '川が大きな流れから小さく枝分かれしていくように、歴史も枝分かれしていきます。「歴てく」は、枝分かれした歴史のサイドストーリーを知る旅をあなたにご提供します。',
            images: [
                {
                    url: 'https://github.com/huynhnguyen1906/Reki-Teku/blob/main/src/app/og-image.png?raw=true',
                    width: 1200,
                    height: 630,
                    alt: '川が大きな流れから小さく枝分かれしていくように、歴史も枝分かれしていきます。「歴てく」は、枝分かれした歴史のサイドストーリーを知る旅をあなたにご提供します。',
                },
            ],
            siteName: '歴てく',
            locale: 'ja_JP',
        },
        twitter: {
            card: 'summary_large_image',
            site: '@rekiteku',
            creator: '@rekiteku',
            title: 'ツアー一覧',
            description:
                '川が大きな流れから小さく枝分かれしていくように、歴史も枝分かれしていきます。「歴てく」は、枝分かれした歴史のサイドストーリーを知る旅をあなたにご提供します。',
            images: 'https://github.com/huynhnguyen1906/Reki-Teku/blob/main/src/app/og-image.png?raw=true',
        },
        applicationName: '歴てく',
        appleWebApp: {
            capable: true,
            title: 'ツアー一覧',
            statusBarStyle: 'default',
        },
    };
};

export default function Tour() {
    return (
        <>
            <TourViewPage />
        </>
    );
}
