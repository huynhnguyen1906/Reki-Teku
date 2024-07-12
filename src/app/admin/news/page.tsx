'use client';
import styles from '@styles/appStyles/Admin/News.module.scss';
import AdminLayout from '../AdminLayout';
import AdminBtnBox from '@/components/Admin/AdminBtnBox';
import NewsItem from '@/components/Admin/News/NewsItem';
import { useAdminNews } from '@/hooks/useAdminNews';
import Spinner from 'react-bootstrap/esm/Spinner';

export default function News() {
    const createUrl = {
        name: '記事追加',
        url: '/admin/news/create',
    };
    const { news, isError, isLoading } = useAdminNews();

    if (isError) return <div>エラーが発生しました。</div>;

    return (
        <AdminLayout>
            <AdminBtnBox createUrl={createUrl} />
            <div className={styles.NewsItemBox}>
                {isLoading ? (
                    <Spinner animation="border" role="status"></Spinner>
                ) : (
                    news && news.map((newsItem: any) => <NewsItem key={newsItem.id} newsItem={newsItem} />)
                )}
            </div>
        </AdminLayout>
    );
}
