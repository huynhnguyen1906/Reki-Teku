'use client';
import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Logo from '../../../public/images/logo-white.svg';
import Style from '@styles/appStyles/Admin/Admin.module.scss';

interface AdminLayoutProps {
    children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className={Style.container}>
            <nav className={Style.nav}>
                <Link href="/admin/news">
                    <Image src={Logo} alt="logo" width={45} height={45} />
                </Link>
                <div className={Style.userIcon}>
                    <Image src={Logo} alt="logo" width={45} height={45} />
                    <span>Admin</span>
                </div>
            </nav>
            <div className={Style.sideBar}>
                <Link
                    href="/admin/news"
                    className={isActive('/admin/news') || isActive('/admin/news/create') ? Style.active : ''}
                >
                    記事・ブログ管理
                </Link>
                <Link
                    href="/admin/tours"
                    className={isActive('/admin/tours') || isActive('/admin/tours/create') ? Style.active : ''}
                >
                    ツアー管理
                </Link>
                <Link href="/admin/text-content" className={isActive('/admin/text-content') ? Style.active : ''}>
                    文書内容管理
                </Link>
            </div>
            <div className={Style.mainContent}>{children}</div>
        </div>
    );
};

export default AdminLayout;
