'use client';

import dynamic from 'next/dynamic';

const EditorComponent = dynamic(() => import('@/components/Admin/News/Editor'), { ssr: false });

import AdminLayout from '@/app/admin/AdminLayout';

export default function CreateNews() {
    return (
        <AdminLayout>
            <EditorComponent />
        </AdminLayout>
    );
}
