import React from 'react';
import Style from '@styles/appStyles/Tours.module.scss';

import ToursCard from '@/components/Tours/ToursCard';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IoMdPin } from 'react-icons/io';
import Link from 'next/link';
import MainLayout from '@/components/MainLayout';
import Schedule from '@/components/Tours/Schedule';
import ThumbnailSlider from '@/components/Tours/ThumbnailSlider';

export default function Tours() {
    return (
        <MainLayout>
            <div className={Style.container}>
                <div className={Style.toursWrap}>
                    <div className={Style.toursContent}>
                        <div className={Style.pref}>
                            <IoMdPin color="#D04848" />
                            <p className={Style.place}>福岡県</p>
                        </div>
                        <h1 className={Style.toursTtl}>古代~室町 博多の歴史</h1>
                        <p className={Style.toursPrice}>¥~1,5000 1泊2日</p>
                        <p className={Style.text}>
                            福岡は、古来より海外との接点を持ち続けてきた日本で唯一の地です。このツアーでは、福岡に点在する各時代を代表する史跡を巡りながら、
                            その歴史的背景と意義を探ります。時系列に沿って訪れることで、福岡の歴史の流れをより深く理解していただけます。
                        </p>
                        <p className={Style.attn}>※ツアー内容の変更可能ですので、お問い合わせください</p>
                        <div className={Style.appt}>
                            <p>集合・解散場所</p>
                            <p>博多駅or福岡</p>
                            <p>(詳細はLINEでお知らせします)</p>
                        </div>
                    </div>
                    <ThumbnailSlider />
                </div>

                <div className={Style.pointWrap}>
                    <div className={Style.contentTtl}>
                        <Image src="/images/logo-black.svg" alt="" width={40} height={40} />
                        <h2>おすすめポイント</h2>
                    </div>
                    <div className={Style.pointContent}>
                        <p className={Style.text}>
                            可能な限り歴史的な順番に各地を訪問するため、歴史の流れを理解しやすくしています。
                            また、福岡古は来から重要な防衛拠点であり、各地に直接足を運ぶため海外との結びつきが強かったことを肌で感じることができます。
                            <br />
                            1日目は大宰府と水城。菅原道真ゆかりの地であり、古代日本の防衛拠点だったことを実感でき、「古代、日本の侵略危機」といったツアー内容です。
                            2日目は今津元寇防塁と志賀島・蒙古塚。元寇の代表的遺跡であり、博多が中世の防衛拠点だったことを実感でき、「中世、日本の侵略危機」といったツアー内容になります。
                            このツアーは、福岡の歴史と防衛拠点としての重要性を深く理解するための貴重な機会です。
                            <br />
                            時代を超えた旅を通じて、福岡の歴史の奥深さを体験してみませんか？
                        </p>

                        <div className={Style.sinWrap}>
                            <div className={Style.border}>
                                <div className={Style.date}>
                                    <p>開始日</p>
                                    <input type="date" name="date" id="date" />
                                </div>
                                <p className={Style.line}></p>
                                <div className={Style.num}>
                                    <p>人数</p>
                                    <select id="num" defaultValue="2">
                                        <option value="1">1名様</option>
                                        <option value="2">2名様</option>
                                        <option value="3">3名様</option>
                                        <option value="4">4名様</option>
                                    </select>
                                </div>
                            </div>

                            <div className={Style.detail}>
                                <p>大人×2</p>
                                <p>¥21980</p>
                            </div>
                            <div className={Style.detail}>
                                <p>子供×1</p>
                                <p>¥11980</p>
                            </div>
                            <p className={Style.line}></p>
                            <div className={Style.total}>
                                <p>合計</p>
                                <p>¥33960</p>
                            </div>
                            <div className={Style.lineBtn}>
                                <Link href="#">LINEで確認する</Link>
                                <FaExternalLinkAlt color="#fffdf7" />
                            </div>
                        </div>
                    </div>

                    <div className={Style.item}>
                        <p>スケジュール</p>
                        <p>ご確認・注意事項</p>
                    </div>
                    <div className={Style.borderline}>
                        <div className={Style.circle}>
                            <div className={Style.borderBox}>
                                <div></div>
                            </div>
                            <div className={Style.schedWrap}>
                                <Schedule />
                                <Schedule />
                                <Schedule />
                                <Schedule />
                                <Schedule />
                                <Schedule />
                                <Schedule />
                                <Schedule />
                            </div>
                        </div>
                    </div>
                    <div className={Style.map}></div>
                </div>

                <div className={Style.tourList}>
                    <div className={Style.contentTtl}>
                        <Image src="/images/logo-black.svg" alt="" width={40} height={40} />
                        <h2>他のツアー</h2>
                    </div>
                    <ToursCard />
                </div>
            </div>
        </MainLayout>
    );
}
