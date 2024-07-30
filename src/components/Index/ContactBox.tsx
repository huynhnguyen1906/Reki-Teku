import Style from '@styles/componentsStyles/Index/ContactBox.module.scss';
import Link from 'next/link';

export default function ContactBox() {
    return (
        <div className={Style.ContactBox}>
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
                <div className={Style.LineQr}></div>
            </div>
            <Link href={'https://lin.ee/6Ak2Mo3'} className={Style.LineIcon} scroll={true}></Link>
        </div>
    );
}
