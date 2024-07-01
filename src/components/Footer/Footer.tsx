import Style from '@styles/componentsStyles/Footer.module.scss'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Footer() {
    return (
		<footer className={Style.footerBg}>
            <div className={Style.footerWrapper}>
                <div className={Style.nav}>
                    <ul>
                        <li><a href="#">トップページ</a></li>
                        <li><a href="#">歴てくについて</a></li>
                        <li><a href="#">ツアー紹介</a></li>
                        <li><a href="#">お知らせ</a></li>
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
                            <p><FaXTwitter /></p>
                            <p><FaInstagram /></p>
                            <p><FaLine /></p>
                        </div>
                        <div className={Style.mail}>
                            <p>LINEで予約・お問い合わせ<span><FaArrowUpRightFromSquare /></span></p>
                            <p>メールで予約・お問い合わせ<span><FaArrowUpRightFromSquare /></span></p>
                        </div>
                    </div>
                </div>
                <div className={Style.footerWrap}>
                    <ul>
                        <li>
                            <a href="#">プライバシーポリシー</a>
                            <a href="#">ご利用にあたって</a>
                            <a href="#">よくある質問</a>
                        </li>
                        <li><a href="#">国内旅行業務取扱管理者番号　1234-56789</a></li>
                        <li><a href="#">&copy;歴てく2024</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
