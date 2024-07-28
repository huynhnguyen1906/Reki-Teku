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
                <hr className="w-100" />
                <Link href="/admin/index-text" className={isActive(/^\/admin\/index-text(\/.*)?$/) ? Style.active : ''}>
                    トップページ文章管理
                </Link>
                <Link href="/admin/about-text" className={isActive(/^\/admin\/about-text(\/.*)?$/) ? Style.active : ''}>
                    歴てくについて文章管理
                </Link>
                <Link
                    href="/admin/company-profile"
                    className={isActive(/^\/admin\/company-profile(\/.*)?$/) ? Style.active : ''}
                >
                    会社概要
                </Link>
                <Link
                    href="/admin/tours-notes"
                    className={isActive(/^\/admin\/tours-notes(\/.*)?$/) ? Style.active : ''}
                >
                    ツアーの確認、注意事項
                </Link>
                <Link
                    href="/admin/privacy-policy"
                    className={isActive(/^\/admin\/privacy-policy(\/.*)?$/) ? Style.active : ''}
                >
                    プライバシーポリシー
                </Link>
                <Link
                    href="/admin/terms-and-conditions"
                    className={isActive(/^\/admin\/terms-and-conditions(\/.*)?$/) ? Style.active : ''}
                >
                    旅行業約款
                </Link>
                <Link href="/admin/questions" className={isActive(/^\/admin\/questions(\/.*)?$/) ? Style.active : ''}>
                    よくある質問
                </Link>
            </div>
            <div className={Style.mainContent}>{children}</div>
        </div>
    );
};

export default AdminLayout;
