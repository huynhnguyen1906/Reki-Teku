'use client';
import styles from '@styles/appStyles/Admin/News.module.scss';
import AdminLayout from '../AdminLayout';
import AdminBtnBox from '@/components/Admin/AdminBtnBox';
import NewsItem from '@/components/Admin/News/NewsItem';
import { useAdminNews } from '@/hooks/useAdminNews';
import { useEffect } from 'react';
export default function News() {
    const createUrl = {
        name: '記事追加',
        url: '/admin/news/create',
    };
    const { news, isError } = useAdminNews();
    useEffect(() => {
        if (isError) {
            console.log('エラーが発生しました。');
        } else {
            fetch('/api/news-admin-view')
                .then((response) => {
                    console.log(response.headers);
                    return response.json();
                })
                .then((data) => console.log(data))
                .catch((error) => console.error('Error:', error));
        }
    }, [isError]);

    return (
        <AdminLayout>
            <AdminBtnBox createUrl={createUrl} />
            <div className={styles.NewsItemBox}>
                {news && news.map((newsItem: any) => <NewsItem key={newsItem.id} newsItem={newsItem} />)}
            </div>
        </AdminLayout>
    );
}
