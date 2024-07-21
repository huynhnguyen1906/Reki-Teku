'use client';
import styles from '@styles/appStyles/Admin/News.module.scss';
import AdminLayout from '../../AdminLayout';
import DeletedNewsItem from '@/components/Admin/News/DeletedNewsItem';
import { useDeletedNews } from '@/hooks/useDeletedNews';
import Spinner from 'react-bootstrap/esm/Spinner';
import { useState, useEffect } from 'react';
import { AdminNewsView } from '@/types/AdminNewsView';

export default function DeletedNews() {
    const { deletedNews, isError, isLoading } = useDeletedNews();
    const [newsList, setNewsList] = useState<AdminNewsView[]>([]);

    useEffect(() => {
        if (deletedNews) {
            setNewsList(deletedNews);
        }
    }, [deletedNews]);

    if (isError) return <div>エラーが発生しました。</div>;

    const handleDelete = (id: string) => {
        setNewsList(newsList.filter((item) => item.id !== id));
    };

    return (
        <AdminLayout>
            <div className={styles.NewsItemBox}>
                {newsList.length === 0 ? <h1>削除された記事はありません</h1> : <h1>過去に削除された記事</h1>}
                {isLoading ? (
                    <Spinner animation="border" role="status"></Spinner>
                ) : (
                    newsList?.map((newsItem) => (
                        <DeletedNewsItem key={newsItem.id} newsItem={newsItem} onDelete={handleDelete} />
                    ))
                )}
            </div>
        </AdminLayout>
    );
}
