import MainLayout from '@/components/MainLayout';
import Style from '@styles/appStyles/Index.module.scss';

export default function Home() {
    const picture = '/images/blog_osaka/picture_03.webp';
    const mask = '/images/firstviewMask.png';

    return (
        <>
            <MainLayout>
                <div className={Style.MainVisual}>
                    <div
                        className={Style.imgDiv}
                        style={{
                            backgroundImage: `url(${picture})`,
                            WebkitMaskImage: `url(${mask})`,
                            maskImage: `url(${mask})`,
                        }}
                    ></div>
                </div>
            </MainLayout>
        </>
    );
}
