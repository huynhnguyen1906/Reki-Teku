'use client';
import { useParams } from 'next/navigation';
import EditTourForm from '@/components/Admin/Tours/EditTourForm';
import Spinner from 'react-bootstrap/Spinner';
import AdminLayout from '@/app/admin/AdminLayout';
import { useTour } from '@/hooks/useTour';

export default function EditTourPage() {
    const { id } = useParams();
    const documentId = Array.isArray(id) ? id[0] : id;
    const { tour, isLoading, isError } = useTour(documentId);

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
                <div>Error loading tour data.</div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            <EditTourForm initialData={tour} documentId={documentId} />
        </AdminLayout>
    );
}
