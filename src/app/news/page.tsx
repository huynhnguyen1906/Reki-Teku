import Style from '@styles/appStyles/News.module.scss';
import Pagination from '@/components/Pagination';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import { IoMdTime } from 'react-icons/io';
import NewsCard from '@/components/NewsCard';

export default function News() {
    return (
        <div className={Style.bg}>
            <div className={Style.blogWrap}>
                <div className={Style.blogHeader}>
                    <div>
                        <Image
                            src="/images/blog_osaka/picture_01.webp"
                            alt=""
                            width={1000}
                            height={490}
                            layout="responsive"
                        />
                    </div>
                    <div className={Style.item}>
                        <div className={Style.time}>
                            <IoMdTime />
                            <p>2024/01/01</p>
                        </div>
                        <p className={Style.kinds}>ブログ</p>
                    </div>
                    <h2 className={Style.ttl}>大阪冬の陣</h2>
                </div>

                <p className={Style.text}>
                    JR玉造駅を降りて西へぶらぶら歩くこと１０分ほど。「真田山」という場所に行き着いた。
                    道路脇の看板には、かわいい真田信繁（幸村）公のイラストが。ゆかり深い地域で、やはり愛されていることを知り、うれしくなった。
                </p>
                <div className={Style.picWrap}>
                    <p className={Style.pic}>
                        <Image
                            src="/images/blog_osaka/picture_02.webp"
                            alt=""
                            width={800}
                            height={610}
                            layout="responsive"
                        />
                    </p>
                    <p className={Style.sup}>信繁公とこんな所でばったり</p>
                </div>

                <p className={Style.text}>
                    敷地に上っていくと、おびただしい墓石が一面を覆っていた。
                    <br />
                    広大な敷地に明治初期から太平洋戦争までの５０００を超える陸軍戦没者の墓碑が並ぶ。日本で最初の最大の陸軍墓地とか。
                    現在の平和があることに改めて感謝させてもらえる場所だ。
                </p>
                <div className={Style.picWrap}>
                    <p className={Style.pic}>
                        <Image
                            src="/images/blog_osaka/picture_03.webp"
                            alt=""
                            width={800}
                            height={610}
                            layout="responsive"
                        />
                    </p>
                    <p className={Style.sup}>案内版の正面に多数の墓碑が並んでた</p>
                </div>

                <p className={Style.text}>
                    墓地を抜けて、西側の坂道を上ると、左手に「心眼寺」があった。門の脇に「真田丸出城跡」の案内板。
                    「別名は偃月城」との説明があり、「へえー」。地図によると、寺の位置は真田丸の東端にあたるようだ。境内に入って左には「真田左衛門佐豊臣信繁之墓」
                    の説明版も。「寺では徳川時代より信繁の菩提を弔っている」と記されていた。
                </p>
                <div className={Style.picWrap}>
                    <p className={Style.pic}>
                        <Image
                            src="/images/blog_osaka/picture_04.webp"
                            alt=""
                            width={800}
                            height={610}
                            layout="responsive"
                        />
                    </p>
                    <p className={Style.sup}>心眼寺の門脇にあった案内板。真田丸の別名は「偃月城」</p>
                </div>

                <div className={Style.picWrap}>
                    <p className={Style.pic}>
                        <Image
                            src="/images/blog_osaka/picture_05.webp"
                            alt=""
                            width={800}
                            height={610}
                            layout="responsive"
                        />
                    </p>
                    <p className={Style.sup}>案内板には「豊臣信繁之墓」とある</p>
                </div>

                <p className={Style.text}>
                    心眼寺から道を挟んで斜め向かいを見ると、「真田丸顕彰碑」の大きな石碑。背後には明星中学・高校のグラウンドが広がっていた。
                    １６１４（慶長１９）年１２月。真田信繁が大阪城の南側に築いた出丸「真田丸」跡。４１０年前、ここに攻めかかった前田、井伊、松平勢に
                    多大な犠牲を強いた戦場の名残は、ほとんどうかがえなかった。紀州九度山での「臥薪嘗胆」「虎視眈々」の日々を経て、真田信繁が最も輝いた晴れ舞台。
                    ５か月後には、ここからほんの２．５キロほど南西の場所で生涯を終えたとされる。
                    訪れたのは３月上旬。おそらく当時は寒中の激戦であったはず。新暦で１月３日にあたる日に、もう一度訪ねてみたい。
                </p>
                <div className={Style.picWrap}>
                    <p className={Style.pic}>
                        <Image
                            src="/images/blog_osaka/picture_06.webp"
                            alt=""
                            width={800}
                            height={610}
                            layout="responsive"
                        />
                    </p>
                    <p className={Style.sup}>
                        「大坂冬の陣」最大の激戦地、真田丸の顕彰碑すぐ後ろでは部活動生の声が響いていた
                    </p>
                </div>

                <p className={Style.text}>
                    歴史上の人物の足跡をてくてくと歩く「歴てく」の旅。その旅は、彼らの一生から生きていく知恵、ヒントをもらえる時間でもあります。
                </p>
            </div>
            <NewsCard />
            <Pagination />
            <Footer />
        </div>
    );
}
