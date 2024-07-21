'use client';
import styles from '@styles/appStyles/Admin/Tours.module.scss';
import AdminLayout from '../AdminLayout';
import AdminBtnBox from '@/components/Admin/AdminBtnBox';
import TourItem from '@/components/Admin/Tours/TourItem';
import { useAdminTour } from '@/hooks/useAdminTour';
import Spinner from 'react-bootstrap/esm/Spinner';
import { useState, useEffect } from 'react';
import { AdminTourView } from '@/types/AdminTourView';

export default function Tours() {
    const createUrl = {
        name: 'ツアー追加',
        url: '/admin/tours/create',
    };
    const deleteUrl = {
        name: 'ごみ箱',
        url: '/admin/tours/deleted',
    };

    const { tour, isError, isLoading } = useAdminTour();
    const [tourList, setTourList] = useState<AdminTourView[]>([]);

    useEffect(() => {
        if (tour) {
            setTourList(tour);
        }
    }, [tour]);

    if (isError) return <div>エラーが発生しました。</div>;

    const handleDelete = (id: string) => {
        setTourList(tourList.filter((item) => item.id !== id));
    };

    return (
        <AdminLayout>
            <AdminBtnBox createUrl={createUrl} deleteUrl={deleteUrl} />
            <div className={styles.TourItemBox}>
                {isLoading ? (
                    <Spinner animation="border" role="status"></Spinner>
                ) : (
                    tourList?.map((tourItem) => (
                        <TourItem key={tourItem.id} TourItem={tourItem} onDelete={handleDelete} />
                    ))
                )}
            </div>
        </AdminLayout>
    );
}
