import MainLayout from '@/components/MainLayout';
import Style from '@styles/appStyles/Index.module.scss';
import VisualContent from '@/components/Index/VisualContent';
export default function Home() {
    return (
        <MainLayout>
            <div className={Style.MainVisual}>
                <VisualContent />
            </div>
        </MainLayout>
    );
}
