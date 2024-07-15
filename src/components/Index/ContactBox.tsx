'use client';
import { useState, useEffect } from 'react';
import Style from '@styles/componentsStyles/Index/ContactBox.module.scss';
import Link from 'next/link';

export default function ContactBox() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 820);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={Style.ContactBox}>
            {!isMobile && (
                <>
                    <div className={Style.ContactTitle}>
                        <p>お問い合わせ</p>
                    </div>
                    <div className={Style.ContactContent}>
                        <div className={Style.ContactLine}>
                            <p className={Style.Title}>公式LINE</p>
                            <p>@690duvzz</p>
                        </div>
                        <div className={Style.ContactMail}>
                            <p className={Style.Title}>メールアドレス</p>
                            <p>rekitekuinside@gmail.com</p>
                        </div>
                        <div className={Style.LineQR}></div>
                    </div>
                </>
            )}
            {isMobile && <Link href={'https://lin.ee/6Ak2Mo3'} className={Style.LineIcon}></Link>}
        </div>
    );
}
