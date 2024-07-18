'use client';
import styles from '@styles/appStyles/Admin/News.module.scss';
import AdminLayout from '../AdminLayout';
import AdminBtnBox from '@/components/Admin/AdminBtnBox';
import NewsItem from '@/components/Admin/News/NewsItem';
import { useAdminNews } from '@/hooks/useAdminNews';
import Spinner from 'react-bootstrap/esm/Spinner';
import { useState, useEffect } from 'react';
import { AdminNewsView } from '@/types/AdminNewsView';

export default function News() {
    const createUrl = {
        name: '記事追加',
        url: '/admin/news/create',
    };
    const deleteUrl = {
        name: 'ごみ箱',
        url: '/admin/news/deleted',
    };

    const { news, isError, isLoading } = useAdminNews();
    const [newsList, setNewsList] = useState<AdminNewsView[]>([]);

    useEffect(() => {
        if (news) {
            setNewsList(news);
        }
    }, [news]);

    if (isError) return <div>エラーが発生しました。</div>;

    const handleDelete = (id: string) => {
        setNewsList(newsList.filter((item) => item.id !== id));
    };

    return (
        <AdminLayout>
            <AdminBtnBox createUrl={createUrl} deleteUrl={deleteUrl} />
            <div className={styles.NewsItemBox}>
                {isLoading ? (
                    <Spinner animation="border" role="status"></Spinner>
                ) : (
                    newsList.map((newsItem) => (
                        <NewsItem key={newsItem.id} newsItem={newsItem} onDelete={handleDelete} />
                    ))
                )}
            </div>
        </AdminLayout>
    );
}
