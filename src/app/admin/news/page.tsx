import styles from '@styles/appStyles/Admin/News.module.scss';
import AdminLayout from '../AdminLayout';
import AdminBtnBox from '@/components/Admin/AdminBtnBox';

export default function News() {
    const createUrl = {
        name: '記事追加',
        url: '/admin/news/create',
    };

    return (
        <AdminLayout>
            <AdminBtnBox createUrl={createUrl} />
            <div className={styles.NewsItemBox}></div>
        </AdminLayout>
    );
}
