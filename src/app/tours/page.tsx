import React from 'react';
import Style from '@styles/appStyles/Tours.module.scss';
import Footer from '@/components/Footer/Footer';
import ToursCard from '@/components/ToursCard';
import Image from 'next/image';

import { FaExternalLinkAlt } from 'react-icons/fa';

<<<<<<< HEAD
import { IoMdPin } from "react-icons/io";
=======
import { IoMdPin } from 'react-icons/io';
// import Slider from '@/components/Slider'
>>>>>>> 7bc86f0909b96981c7f7dd181a1e203563c07175
import Link from 'next/link';

export default function Tours() {
    return (
        <div className={Style.bg}>
            <div className={Style.toursWrap}>
                <div className={Style.toursContent}>
                    <div className={Style.pref}>
                        <IoMdPin color="#D04848" />
                        <p className={Style.place}>福岡県</p>
                    </div>
                    <h1>古代~室町 博多の歴史</h1>
                    <p>¥~1,5000 1泊2日</p>
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
                <div className={Style.toursImg}></div>
            </div>

            <div className={Style.pointWrap}>
                <div className={Style.ttl}>
                    <Image src="images/logo-black.svg" alt="" width={40} height={40} />
                    <h2>おすすめポイント</h2>
                </div>
                <div className={Style.pointFlex}>
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
                                <select id="num">
                                    <option value="1">1名様</option>
                                    <option value="2" selected>
                                        2名様
                                    </option>
                                    <option value="3">3名様</option>
                                    <option value="4">4名様</option>
                                </select>
                            </div>
                        </div>

                        <div className={Style.detail}>
                            <p>大人</p>
                            <p>¥21980</p>
                        </div>
                        <div className={Style.detail}>
                            <p>子供</p>
                            <p>¥21980</p>
                        </div>
                        <p className={Style.line}></p>
                        <div className={Style.total}>
                            <p>合計</p>
                            <p>¥21980</p>
                        </div>
                        <div className={Style.lineBtn}>
                            <Link href="#">LINEで確認する</Link>
                            <FaExternalLinkAlt color='#fffdf7'/>
                        </div>
                    </div>
                </div>

                <div className={Style.item}>
                    <p>スケジュール</p>
                    <p>ご確認・注意事項</p>
                </div>

                <div className={Style.schedWrap}>
                    <p className={Style.borderline}></p>
                    <div className={Style.schedContent}>
                        <div className={Style.pic}>
                            <Image src="/images/tours/day2_1.png" alt="今津元寇防塁" width={650} height={366} />
                            <p>
                                DAY1_①<span>板付遺跡(博多区)</span>
                            </p>
                        </div>
                        <div className={Style.text}>
                            <p>~日本最古の稲作跡~</p>
                            <p>
                                古代の福岡にタイムスリップ！？
                                <br />
                                弥生時代の集落跡を見学!!
                            </p>
                        </div>
                    </div>
                    <div className={Style.schedContent}>
                        <div className={Style.pic}>
                            <Image src="/images/tours/day1_2.png" alt="水城" width={650} height={366} />
                            <p>
                                DAY1_②<span>水城(太宰府市)</span>
                            </p>
                        </div>
                        <div className={Style.text}>
                            <p>~古代の防御施設を探索~</p>
                            <p>古代の防御拠点、水城を探訪!!</p>
                        </div>
                    </div>
                    <div className={Style.schedContent}>
                        <div className={Style.pic}>
                            <Image src="/images/tours/day1_3.png" alt="太宰府天満宮" width={650} height={366} />
                            <p>
                                DAY1_③<span>太宰府天満宮(太宰府市)</span>
                            </p>
                        </div>
                        <div className={Style.text}>
                            <p>~菅原道真公に~祈りを捧げる</p>
                            <p>学問の神様、菅原道真を祀る神社へ!!</p>
                        </div>
                    </div>
                    <div className={Style.schedContent}>
                        <div className={Style.pic}>
                            <Image src="/images/tours/day1_4.png" alt="鴻臚館" width={650} height={366} />
                            <p>
                                DAY1_④<span>鴻臚館(福岡市)</span>
                            </p>
                        </div>
                        <div className={Style.text}>
                            <p>~古代の外交拠点を訪問~</p>
                            <p>古代の迎賓館であり、海外交流の歴史を学べる!!</p>
                        </div>
                    </div>
                    <div className={Style.schedContent}>
                        <div className={Style.pic}>
                            <Image src="/images/tours/day2_1.png" alt="今津元寇防塁" width={650} height={366} />
                            <p>
                                DAY2_①<span>今津元寇防塁(福岡市)</span>
                            </p>
                        </div>
                        <div className={Style.text}>
                            <p>~元寇の歴史を体感~</p>
                            <p>元寇の防衛線を訪れ、その背景を肌で感じる!!</p>
                        </div>
                    </div>
                    <div className={Style.schedContent}>
                        <div className={Style.pic}>
                            <Image src="/images/tours/day2_2.png" alt="志賀島・蒙古塚" width={650} height={366} />
                            <p>
                                DAY2_②<span>志賀島・蒙古塚(福岡市)</span>
                            </p>
                        </div>
                        <div className={Style.text}>
                            <p>~勇敢な防衛の痕跡を探る~</p>
                            <p>元寇の戦死者を祀る蒙古塚!</p>
                        </div>
                    </div>
                    <div className={Style.schedContent}>
                        <div className={Style.pic}>
                            <Image src="/images/tours/day2_1.png" alt="今津元寇防塁" width={650} height={366} />
                            <p>
                                DAY2_③<span>多々良浜の戦い古戦場跡(福岡市)</span>
                            </p>
                        </div>
                        <div className={Style.text}>
                            <p>~中世の戦いの跡地を巡る~</p>
                            <p>鎌倉時代の跡地に足を踏み入れる⁉️</p>
                        </div>
                    </div>
                    <div className={Style.schedContent}>
                        <div className={Style.pic}>
                            <Image src="/images/tours/day2_1.png" alt="今津元寇防塁" width={650} height={366} />
                            <p>
                                DAY_④<span>箱崎八幡宮(福岡市)</span>
                            </p>
                        </div>
                        <div className={Style.text}>
                            <p>~戦勝祈願の神社を参拝~</p>
                            <p>武運長久を祈る神社!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={Style.tourList}>
                <div className={Style.ttl}>
                    <Image src="images/logo-black.svg" alt="" width={40} height={40} />
                    <h2>他のツアー</h2>
                </div>
<<<<<<< HEAD
                <ToursCard />
=======
                <Link href="#">
                    <div className={Style.tours}>
                        <Image src="/images/tours/day2_1.png" alt="今津元寇防塁" width={367} height={244} />
                        <h3>室町〜江戸　博多の歴史</h3>
                        <p>
                            ホームに降り立つと、真っ赤な生地に黒い「六文銭」があしらわれた幕が頭上を覆っていた。昨年11月半ばの南海高野線九度山駅
                            （和歌山県九.....
                        </p>
                    </div>
                </Link>
>>>>>>> 7bc86f0909b96981c7f7dd181a1e203563c07175
            </div>
            <Footer />
        </div>
    );
}
