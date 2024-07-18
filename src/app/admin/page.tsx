'use client';

import { useRouter } from 'next/navigation';
import { handleAdminLogin } from '@/utils/handleAdminLogin';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/esm/Button';

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
        <div className="vw-100 vh-100 d-flex flex-column justify-content-center d-flex align-items-center gap-5 bg-light text-dark">
            <h1
                style={{
                    fontSize: '3.2rem',
                    borderBottom: '3px solid',
                    fontFamily: 'roboto',
                    fontWeight: '500',
                    padding: '0px 8px',
                }}
            >
                Admin ログイン
            </h1>
            <Button onClick={login} size="lg" className="fs-3">
                Login with Google
            </Button>
        </div>
    );
};

export default AdminPage;
