import AdminLayout from '@/app/admin/AdminLayout';
import Editor from '@/components/Admin/Editor';

export default function CreateNews() {
    return (
        <AdminLayout>
            <div>News Create</div>
            <Editor />
        </AdminLayout>
    );
}
