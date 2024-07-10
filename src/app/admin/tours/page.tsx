import AdminBtnBox from '@/components/Admin/AdminBtnBox';
import AdminLayout from '../AdminLayout';
export default function Tours() {
    const createUrl = {
        name: 'ツアー追加',
        url: '/admin/tours/create',
    };
    return (
        <>
            <AdminLayout>
                <AdminBtnBox createUrl={createUrl} />
                <p>Tours page content</p>
            </AdminLayout>
        </>
    );
}
