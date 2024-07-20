'use client';
import styles from '@styles/appStyles/Admin/Tours.module.scss';
import AdminLayout from '../../AdminLayout';
import DeletedTourItem from '@/components/Admin/Tours/DeletedTourItem';
import { useDeletedTours } from '@/hooks/useDeletedTours';
import Spinner from 'react-bootstrap/esm/Spinner';
import { useState, useEffect } from 'react';
import { AdminTourView } from '@/types/AdminTourView';

export default function DeletedTours() {
    const { deletedTour, isError, isLoading } = useDeletedTours();
    const [tourList, setTourList] = useState<AdminTourView[]>([]);

    useEffect(() => {
        if (deletedTour) {
            setTourList(deletedTour);
        }
    }, [deletedTour]);

    if (isError) return <div>エラーが発生しました。</div>;

    const handleDelete = (id: string) => {
        setTourList(tourList.filter((item) => item.id !== id));
    };

    return (
        <AdminLayout>
            <div className={styles.TourItemBox}>
                {tourList.length === 0 ? <h1>削除されたツアーはありません</h1> : <h1>過去に削除されたツアー</h1>}
                {isLoading ? (
                    <Spinner animation="border" role="status"></Spinner>
                ) : (
                    tourList.map((tourItem) => (
                        <DeletedTourItem key={tourItem.id} TourItem={tourItem} onDelete={handleDelete} />
                    ))
                )}
            </div>
        </AdminLayout>
    );
}
