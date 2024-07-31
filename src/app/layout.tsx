import '@styles/GlobalStyles.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: {
            default: '歴てく',
            template: '%s | 歴てく',
        },
        description: '自分の目と足で歴史の『サイドストーリー』を探求し人生を深める',
        keywords: '歴てく, 歴史, サイドストーリー, 人生, 深める, fukuoka, 福岡',
        openGraph: {
            type: 'website',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            title: '歴てく',
            description: '自分の目と足で歴史の『サイドストーリー』を探求し人生を深める',
            images: [
                {
                    url: '/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: 'Og Image Alt',
                },
            ],
            siteName: '歴てく',
            locale: 'ja_JP',
        },
        twitter: {
            card: 'summary_large_image',
            site: '@site_account',
            creator: '@creator_account',
            title: 'Your Site Title',
            description: 'Your site description',
            images: 'https://www.yourwebsite.com/twitter-image.jpg',
        },
        applicationName: 'Your Application Name',
        appleWebApp: {
            capable: true,
            title: 'Your App Title',
            statusBarStyle: 'default',
        },
        themeColor: '#ffffff',
        icons: {
            icon: [
                {
                    url: 'https://www.yourwebsite.com/icon-192.png',
                    sizes: '192x192',
                },
                {
                    url: 'https://www.yourwebsite.com/icon-512.png',
                    sizes: '512x512',
                },
            ],
            apple: 'https://www.yourwebsite.com/apple-icon.png',
        },
        manifest: 'https://www.yourwebsite.com/manifest.json',
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
