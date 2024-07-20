// pages/admin/tours/edit/[id]/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import EditTourForm from '@/components/Admin/Tours/EditTourForm';
import Spinner from 'react-bootstrap/Spinner';
import AdminLayout from '@/app/admin/AdminLayout';

export default function EditTourPage() {
    const [initialData, setInitialData] = useState<any>(null);
    const { id } = useParams();

    const documentId = Array.isArray(id) ? id[0] : id;

    useEffect(() => {
        const fetchTourData = async () => {
            try {
                const response = await axios.get(`/api/get-tour/${documentId}`);
                setInitialData(response.data);
            } catch (error) {
                console.error('Error fetching tour data:', error);
            }
        };

        fetchTourData();
    }, [documentId]);

    if (!initialData) {
        return (
            <AdminLayout>
                <Spinner animation="border" />
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            <EditTourForm initialData={initialData} documentId={documentId} />
        </AdminLayout>
    );
}
