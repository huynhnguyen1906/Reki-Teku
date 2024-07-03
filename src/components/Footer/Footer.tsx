import Style from '@styles/componentsStyles/Footer.module.scss'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from 'next/link';

export default function Footer() {
    return (
		<footer className={Style.footerBg}>
            <div className={Style.footerWrapper}>
                <div className={Style.nav}>
                    <ul>
                        <li><Link href="#">トップページ</Link></li>
                        <li><Link href="#">歴てくについて</Link></li>
                        <li><Link href="#">ツアー紹介</Link></li>
                        <li><Link href="#">お知らせ</Link></li>
                    </ul>
                </div>
                <div className={Style.infoWrap}>
                    <div className={Style.contactWrap}>
                        <h1>歴てく IN・SIDE</h1>
                        <div>
                            <p>〒819-0336</p>
                            <p>福岡市西区横浜3丁目27-15</p>
                        </div>
                        <div>
                            <p>TEL：090-2359-2427</p>
                            <p>Mail：rekitekuinside@gmail.com</p>
                        </div>
                    </div>
                    <div className={Style.messageWrap}>
                        <div className={Style.sns}>
                            <p><Link href="#"><FaXTwitter /></Link></p>
                            <p><Link href="#"><FaInstagram /></Link></p>
                            <p><Link href="#"><FaLine /></Link></p>
                        </div>
                        <div className={Style.mail}>
                            <p>LINEで予約・お問い合わせ<span><Link href="#"><FaArrowUpRightFromSquare /></Link></span></p>
                            <p>メールで予約・お問い合わせ<span><Link href="#"><FaArrowUpRightFromSquare /></Link></span></p>
                        </div>
                    </div>
                </div>
                <div className={Style.footerWrap}>
                    <ul>
                        <li>
                            <Link href="#">プライバシーポリシー</Link>
                            <Link href="#">ご利用にあたって</Link>
                            <Link href="#">よくある質問</Link>
                        </li>
                        <li><Link href="#">国内旅行業務取扱管理者番号　1234-56789</Link></li>
                        <li><Link href="#">&copy;歴てく2024</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
