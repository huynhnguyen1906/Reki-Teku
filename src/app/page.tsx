import MainLayout from '@/components/MainLayout';
import Style from '@styles/appStyles/Index.module.scss';
import TitleStyle from '@styles/appStyles/About.module.scss';
import VisualContent from '@/components/Index/VisualContent';
import { MdArrowRightAlt } from 'react-icons/md';
import Link from 'next/link';
import ToursSlider from '@/components/Index/ToursSlider';
import NewsContainer from '@/components/News/NewsContainer';
import IndexDot from '@/components/Index/IndexDot';
import IndexText from '@/components/Index/indexText';

export default function Home() {
    return (
        <MainLayout>
            <IndexDot />
            <div className={Style.MainVisual}>
                <VisualContent />
            </div>
            <div className={Style.MainContent}>
                <div className={Style.About}>
                    <div className={Style.TextContainer}>
                        <div className={Style.CloudLeft}></div>
                        <div className={Style.CloudRight}></div>
                        <IndexText />
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
