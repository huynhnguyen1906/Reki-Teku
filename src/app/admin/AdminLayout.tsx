'use client';
import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { destroyCookie } from 'nookies';
import Logo from '../../../public/images/logo-white.svg';
import Style from '@styles/appStyles/Admin/Admin.module.scss';
import Button from 'react-bootstrap/Button';
import useAuthRefresh from '@/hooks/useAuthRefresh';

interface AdminLayoutProps {
    children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    useAuthRefresh();

    const router = useRouter();
    const pathname = usePathname();

    const isActive = (regex: RegExp) => regex.test(pathname);

    const handleLogout = () => {
        destroyCookie(null, 'auth_token', { path: '/' });
        router.push('/admin');
    };

    return (
        <div className={Style.container}>
            <nav className={Style.nav}>
                <Link href="/admin/news">
                    <Image src={Logo} alt="logo" width={45} height={45} />
                </Link>
                <Button variant="secondary" onClick={handleLogout}>
                    ログアウト
                </Button>
            </nav>
            <div className={Style.sideBar}>
                <Link href="/admin/news" className={isActive(/^\/admin\/news(\/.*)?$/) ? Style.active : ''}>
                    記事・ブログ管理
                </Link>
                <Link href="/admin/tours" className={isActive(/^\/admin\/tours(\/.*)?$/) ? Style.active : ''}>
                    ツアー管理
                </Link>
                <Link
                    href="/admin/text-content"
                    className={isActive(/^\/admin\/text-content(\/.*)?$/) ? Style.active : ''}
                >
                    文章内容管理
                </Link>
            </div>
            <div className={Style.mainContent}>{children}</div>
        </div>
    );
};

export default AdminLayout;
