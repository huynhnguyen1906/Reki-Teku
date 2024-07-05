'use client';

import dynamic from 'next/dynamic';

const EditorComponent = dynamic(() => import('@/components/Admin/Editor'), { ssr: false });

import AdminLayout from '@/app/admin/AdminLayout';

export default function CreateNews() {
    return (
        <AdminLayout>
            <div>News Create</div>
            <EditorComponent />
        </AdminLayout>
    );
}
