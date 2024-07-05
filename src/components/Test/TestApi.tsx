'use client';
import { useFirebaseTest } from '@/hooks/useFirebaseTest';

export default function TestApi() {
    const { data, isLoading, isError } = useFirebaseTest();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data</div>;

    return (
        <div>
            <h1>Test Firebase API</h1>
            <p>{data?.message}</p>
            {data?.documents && data.documents.length > 0 ? (
                <ul>
                    {data.documents.map((doc) => (
                        <li key={doc.id}>{doc.data.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No documents found.</p>
            )}
        </div>
    );
}
