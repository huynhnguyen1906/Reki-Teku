import Style from '@styles/componentsStyles/Footer.module.scss'

export default function Footer() {
	return (
		<footer>
			<div className={Style.footerWrapper}>
				<div className={Style.nav}>
					<ul>
						<li><a href="">トップページ</a></li>
						<li><a href="">歴てくについて</a></li>
						<li><a href="">ツアー紹介</a></li>
						<li><a href="">お知らせ</a></li>
					</ul>
				</div>

				<h1 className={Style.title}>歴てく IN・SIDE</h1>
			<div className={Style.infoWrap}>
				<div className={Style.contactWrap}>
					<div>
						<p>〒819-0336</p>
						<p>福岡市西区横浜3丁目27-15</p>
					</div>
					<div>
						<p>TEL：090-2359-2427</p>
						<p>Mail：rekitekuinside@gmail.com</p>
					</div>
				</div>


				<div className={Style.message}>
					<div className={Style.sns}>
						{/* ここは後で画像に変えます */}
						<p>x</p>
						<p>i</p>
						<p>l</p>
					</div>
					<div>
						<p>LINEで予約・お問い合わせ</p>
						<p>メールで予約・お問い合わせ</p>
					</div>
				</div>
			</div>

				<div className={Style.footerWrap}>
					<li><a href="">プライバシーポリシー</a></li>
					<li><a href="">ご利用にあたって</a></li>
					<li><a href="">よくある質問</a></li>
					<li><a href="">国内旅行業務取扱管理者番号　1234-56789</a></li>
					<li><a href="">&copy;歴てく2024</a></li>
				</div>
			</div>
		</footer>
	);
}
