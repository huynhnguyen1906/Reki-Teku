'use client';

import { useParams } from 'next/navigation';
import EditorWithData from '@/components/Admin/News/EditorWithData';
import AdminLayout from '../../../AdminLayout';
import Spinner from 'react-bootstrap/esm/Spinner';
import { useNews } from '@/hooks/useNews';

export default function EditNewsPage() {
    const { id } = useParams();
    const documentId = Array.isArray(id) ? id[0] : id;
    const { news, isLoading, isError } = useNews(documentId);

    if (isLoading) {
        return (
            <AdminLayout>
                <Spinner animation="border" />
            </AdminLayout>
        );
    }

    if (isError) {
        return (
            <AdminLayout>
                <div>Error loading news data.</div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            <EditorWithData initialData={news.news_data} documentId={documentId} />
        </AdminLayout>
    );
}
