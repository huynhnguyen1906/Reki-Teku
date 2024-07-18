'use client';

import { useRouter } from 'next/navigation';
import { handleAdminLogin } from '@/utils/handleAdminLogin';
import { toast } from 'react-toastify';

const AdminPage = () => {
    const router = useRouter();

    const login = async () => {
        const success = await handleAdminLogin();
        if (success) {
            router.push('/admin/news');
            toast.success('ログインしました');
        } else {
            toast.error('ログインに失敗しました, 許可されたメールアドレスを使用してください');
        }
    };

    return (
        <div>
            <h1>Admin Login</h1>
            <button onClick={login}>Login with Google</button>
        </div>
    );
};

export default AdminPage;
