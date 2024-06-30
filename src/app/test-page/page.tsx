import axios from 'axios';
import TestApi from '@/components/TestApi';
import Link from 'next/link';
export default function AdminPage() {
    async () => {
        try {
            const response = await axios.get('/api/test-firebase');
            console.log(response.data.message);
        } catch (error: any) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <h1>Test Page</h1>
            <TestApi />
            <Link href={'/'}>Home</Link>
        </div>
    );
}
