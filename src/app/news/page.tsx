import NewsViewPage from '@/components/News/NewsViewPage';
import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: 'ニュース一覧',
    };
};

export default function NewsView() {
    return (
        <>
            <NewsViewPage />
        </>
    );
}
