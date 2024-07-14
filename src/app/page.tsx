import MainLayout from '@/components/MainLayout';
import Style from '@styles/appStyles/Index.module.scss';
import TitleStyle from '@styles/appStyles/About.module.scss';
import VisualContent from '@/components/Index/VisualContent';
import { MdArrowRightAlt } from 'react-icons/md';
import Link from 'next/link';
import ToursSlider from '@/components/Index/ToursSlider';
import NewsContainer from '@/components/News/NewsContainer';
export default function Home() {
    return (
        <MainLayout>
            <div className={Style.MainVisual}>
                <VisualContent />
            </div>
            <div className={Style.MainContent}>
                <div className={Style.About}>
                    <div className={Style.TextContainer}>
                        <div className={Style.CloudLeft}></div>
                        <div className={Style.CloudRight}></div>
                        <h2>歴てくについて</h2>
                        <p>
                            <span>有名ではない地域の</span>
                            <br />
                            <span>隠れた歴史や人物の足跡を</span>
                            <br />
                            <span>たどり、新たな発見に満ちた</span>
                            <br />
                            <span>ツアーを楽しめます</span>
                            <br />
                            <span>歴史を知る旅を始めましょう。</span>
                        </p>
                        <button className={Style.Button}>
                            <Link href={'/about'}>
                                もっと見る
                                <MdArrowRightAlt />
                            </Link>
                        </button>
                    </div>
                </div>
                <div className={Style.Tours}>
                    <h2 className={TitleStyle.ttl}>ツアー紹介</h2>
                    <div className={Style.ToursSliderContainer}>
                        <ToursSlider />
                    </div>
                </div>
                <div className={Style.News}>
                    <h2 className={TitleStyle.ttl}>お知らせ</h2>
                    <NewsContainer />
                </div>
            </div>
        </MainLayout>
    );
}
