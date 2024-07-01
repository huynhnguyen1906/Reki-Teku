import Style from '@styles/componentsStyles/Footer.module.scss'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Footer() {
	return (
		<footer>
			<div className={Style.footerWrapper}>
				<div className={Style.wave_container}>
					<svg className={Style.wave}  viewBox="0 0 1280 238" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M-2 0L40.7333 24.7255C83.4667 49.451 168.933 98.9019 254.4 113.737C339.867 128.572 425.333 108.792 510.8 93.9568C596.267 79.1215 681.733 69.2313 767.2 79.1215C852.667 89.0117 938.133 118.682 1023.6 108.792C1109.07 98.9019 1194.53 49.451 1237.27 24.7255L1280 0V237.365H1237.27C1194.53 237.365 1109.07 237.365 1023.6 237.365C938.133 237.365 852.667 237.365 767.2 237.365C681.733 237.365 596.267 237.365 510.8 237.365C425.333 237.365 339.867 237.365 254.4 237.365C168.933 237.365 83.4667 237.365 40.7333 237.365H-2V0Z" fill="#4B3333"/>
					</svg>
				</div>
				
				<div className={Style.nav}>
					<ul>
						<li><a href="">トップページ</a></li>
						<li><a href="">歴てくについて</a></li>
						<li><a href="">ツアー紹介</a></li>
						<li><a href="">お知らせ</a></li>
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
							<a href="">プライバシーポリシー</a>
							<a href="">ご利用にあたって</a>
							<a href="">よくある質問</a>
						</li>
						<li><a href="">国内旅行業務取扱管理者番号　1234-56789</a></li>
						<li><a href="">&copy;歴てく2024</a></li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
