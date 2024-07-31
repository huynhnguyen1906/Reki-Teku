import '@styles/GlobalStyles.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: {
            default: '歴てく｜自分の目と足で歴史の『サイドストーリー』を探求し人生を深める',
            template: '%s | 歴てく',
        },
        description: '',
        keywords: '歴てく, reki-teku, 歴史, サイドストーリー, 人生, 深める, fukuoka, 福岡',
        openGraph: {
            type: 'website',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            title: '歴てく｜自分の目と足で歴史の『サイドストーリー』を探求し人生を深める',
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
            title: '歴てく｜自分の目と足で歴史の『サイドストーリー』を探求し人生を深める',
            description:
                '川が大きな流れから小さく枝分かれしていくように、歴史も枝分かれしていきます。「歴てく」は、枝分かれした歴史のサイドストーリーを知る旅をあなたにご提供します。',
            images: 'https://github.com/huynhnguyen1906/Reki-Teku/blob/main/src/app/og-image.png?raw=true',
        },
        applicationName: '歴てく',
        appleWebApp: {
            capable: true,
            title: '歴てく｜自分の目と足で歴史の『サイドストーリー』を探求し人生を深める',
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <body>
                {children}{' '}
                <ToastContainer
                    position="bottom-left"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    theme="dark"
                />
            </body>
        </html>
    );
}
