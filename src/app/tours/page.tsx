import TourViewPage from '@/components/Tours/TourViewPage';

import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: 'ツアー一覧',
    };
};

export default function Tour() {
    return (
        <>
            <TourViewPage />
        </>
    );
}
