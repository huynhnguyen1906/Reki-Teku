import axios from 'axios';
import TestApi from '@/components/Test/TestApi';
import Link from 'next/link';
export default function TestPage() {
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
