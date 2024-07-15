'use client';
import { useEffect } from 'react';
import React from 'react';
import Style from '@styles/appStyles/About.module.scss';
import Image from 'next/image';
import MainLayout from '@/components/MainLayout';

export default function About() {
    useEffect(() => {
        const updateBackground = () => {
            if (window.matchMedia('(max-width: 600px)').matches) {
                document.body.style.backgroundImage = 'url(/images/bg-cloud.svg)';
                document.body.style.backgroundSize = 'auto 50%';
            } else {
                document.body.style.backgroundImage = 'url(/images/bg-cloud.svg)';
                document.body.style.backgroundSize = 'cover';
            }
        };

        updateBackground();

        window.addEventListener('resize', updateBackground);

        return () => {
            window.removeEventListener('resize', updateBackground);
            document.body.style.backgroundImage = 'url(/images/bg.svg)';
        };
    }, []);
    return (
        <MainLayout>
            <div className={Style.companyWrap}>
                <div className={Style.content}>
                    <h2 className={Style.ttl}>「歴てく」について</h2>
                    <h3>自分の目と足で歴史の『サイドストーリー』を探求し人生を深める</h3>
                    <p>
                        川が大きな流れから小さく枝分かれしていくように、歴史も枝分かれしていきます。
                        <br />
                        「歴てく」は、枝分かれした歴史のサイドストーリーを知る旅をあなたにご提供します。
                    </p>
                </div>
                <div className={Style.content}>
                    <h2 className={Style.ttl}>「歴てく」の理念</h2>
                    <h3>歴史は人が生きていくためのインスピレーションを与える教科書。</h3>
                    <p>
                        いにしえの人物それぞれが歩んだ足跡を訪ね、遺構や文物を目にすると、生き方の助けになる「発見」があります。
                        <br />
                        有名、無名の史跡をてくてくと歩き、「今後の人生の糧」や「地域のより深い魅力」を見つけませんか？
                        <br />
                        また、地域の過去~現在にわたる史跡を巡り、通史を知れば、その地域の「個性」が見えてきます。
                        <br />
                        歴てくは、歴史を通じて人々の生活に新たな視点と価値を提供し、地域の魅力を再発見する旅をご案内します。
                    </p>
                </div>
                <div className={Style.content}>
                    <h2 className={Style.ttl_}>ごあいさつ</h2>
                    <div className={Style.flex}>
                        <div className={Style.text}>
                            <p>
                                モラルの低下が懸念される日本社会。
                                <br />
                                歴史に興味を持つことで、先人たちの生き方や失敗から学び、道徳観念を養うことができる。
                            </p>
                            <p>
                                歴史上の人物に焦点を当てたツアーを通じて、彼らの信念や過ちから正しい生き方のヒントを提供し、
                                社会に道徳を取り戻す一助としたい。
                            </p>
                        </div>
                        <div className={Style.profile}>
                            <Image src="/images/profile.png" alt="" width={250} height={330} />
                            <p>代表取締役 吉丸宣孝</p>
                        </div>
                    </div>
                </div>

                <div className={Style.aboutWrap}>
                    <h2 className={Style.ttl_}>会社概要</h2>
                    <dl>
                        <div className={Style.about}>
                            <dt>名称</dt>
                            <dd>歴てく〜IN・SIDE</dd>
                        </div>
                    </dl>
                    <dl>
                        <div className={Style.about}>
                            <dt>設立</dt>
                            <dd>2025年1月1日</dd>
                        </div>
                    </dl>
                    <dl>
                        <div className={Style.about}>
                            <dt>所在地</dt>
                            <dd>〒819-0366</dd>
                            <dd>福岡市西区横浜3丁目27-15</dd>
                        </div>
                    </dl>
                    <dl>
                        <div className={Style.about}>
                            <dt>取締役</dt>
                            <dd>吉丸宣孝</dd>
                        </div>
                    </dl>
                    <dl>
                        <div className={Style.about}>
                            <dt>連絡先</dt>
                            <dd>090-2359-2427</dd>
                        </div>
                    </dl>
                    <dl>
                        <div className={Style.about}>
                            <dt>営業日</dt>
                            <dd>10:00~18:00(月・火は定休日)</dd>
                        </div>
                    </dl>
                    <dl>
                        <div className={Style.about}>
                            <dt>資本金</dt>
                            <dd>1,234,567円</dd>
                        </div>
                    </dl>
                    <dl>
                        <div className={Style.about}>
                            <dt>資格</dt>
                            <dd>国内旅行業取扱主任者 国内旅行業務旅程管理者</dd>
                        </div>
                    </dl>
                    <dl>
                        <div className={Style.about}>
                            <dt>加盟団体</dt>
                            <dd>一般社団法人全国旅行業協会</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </MainLayout>
    );
}
