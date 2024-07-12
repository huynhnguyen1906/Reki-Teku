import MainLayout from '@/components/MainLayout';
import Style from '@styles/appStyles/Index.module.scss';
import picture from '../../public/images/blog_osaka/picture_03.webp';
import mask from '../../public/images/firstviewMask.png';

export default function Home() {
    return (
        <>
            <MainLayout>
                <div className={Style.MainVisual}>
                    <div
                        className={Style.imgDiv}
                        style={{
                            backgroundImage: `url(images/blog_osaka/picture_03.webp)`,
                            WebkitMaskImage: `url(images/firstviewMask.png)`,
                            maskImage: `url(images/firstviewMask.png`,
                        }}
                    ></div>
                </div>
            </MainLayout>
        </>
    );
}
