'use client';
import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Logo from '../../../public/images/logo-white.svg';
import Styles from '@styles/appStyles/Admin.module.scss';

interface AdminLayoutProps {
    children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className={Styles.container}>
            <nav className={Styles.nav}>
                <Link href="/admin/news">
                    <Image src={Logo} alt="logo" width={45} height={45} />
                </Link>
                <Image src={Logo} alt="logo" width={45} height={45} />
            </nav>
            <div className={Styles.sideBar}>
                <Link href="/admin/news" className={isActive('/admin/news') ? Styles.active : ''}>
                    記事・ブログ管理
                </Link>
                <Link href="/admin/tours" className={isActive('/admin/tours') ? Styles.active : ''}>
                    ツアー管理
                </Link>
                <Link href="/admin/text-content" className={isActive('/admin/text-content') ? Styles.active : ''}>
                    文書内容管理
                </Link>
            </div>
            <div className={Styles.mainContent}>{children}</div>
        </div>
    );
};

export default AdminLayout;
