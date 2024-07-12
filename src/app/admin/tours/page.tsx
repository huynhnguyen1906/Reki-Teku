'use client';
import styles from '@styles/appStyles/Admin/Tours.module.scss';
import AdminLayout from '../AdminLayout';
import AdminBtnBox from '@/components/Admin/AdminBtnBox';
import TourItem from '@/components/Admin/Tours/TourItem';
import { useAdminTour } from '@/hooks/useAdminTour';
import Spinner from 'react-bootstrap/esm/Spinner';

export default function Tours() {
    const createUrl = {
        name: 'ツアー追加',
        url: '/admin/tours/create',
    };

    const { tour, isError, isLoading } = useAdminTour();
    if (isError) return <div>エラーが発生しました。</div>;
    return (
        <>
            <AdminLayout>
                <AdminBtnBox createUrl={createUrl} />
                <div className={styles.TourItemBox}>
                    {isLoading ? (
                        <Spinner animation="border" role="status"></Spinner>
                    ) : (
                        tour && tour.map((tourItem: any) => <TourItem key={tourItem.id} TourItem={tourItem} />)
                    )}
                </div>
            </AdminLayout>
        </>
    );
}
