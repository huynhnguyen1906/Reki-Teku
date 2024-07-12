import MainLayout from '@/components/MainLayout';
import Style from '@styles/appStyles/Index.module.scss';

export default function Home() {
    return (
        <>
            <MainLayout>
                <div className={Style.MainVisual}>
                    <div className={Style.imgDiv}></div>
                </div>
            </MainLayout>
        </>
    );
}
