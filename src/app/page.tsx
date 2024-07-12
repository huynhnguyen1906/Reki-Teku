import MainLayout from '@/components/MainLayout';
import Style from '@styles/appStyles/Index.module.scss';

export default function Home() {
    return (
        <>
            <MainLayout>
                <div className={Style.MainVisual}>
                    <div className={Style.imgDiv}></div>
                    <svg
                        viewBox="0 0 1920 1080"
                        width="100%"
                        height="100%"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <mask id="wave-mask" x="0" y="0" width="100%" height="100%">
                                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                                <path
                                    d="M1280 714.395L1244.44 702.617C1208.89 691.279 1137.78 667.062 1066.67 679.17C995.556 691.279 924.444 737.511 853.333 767.232C782.222 796.952 711.111 807.96 640 796.622C568.889 784.844 497.778 749.619 426.667 743.785C355.556 737.511 284.445 761.728 213.333 767.231C142.222 772.735 71.1112 761.728 35.5556 755.453L3.84045e-06 749.619L1.70053e-05 573.497H35.5556C71.1112 573.497 142.222 573.497 213.333 573.497C284.445 573.497 355.556 573.497 426.667 573.497C497.778 573.497 568.889 573.497 640 573.497C711.111 573.497 782.222 573.497 853.333 573.497C924.444 573.497 995.556 573.497 1066.67 573.497C1137.78 573.497 1208.89 573.497 1244.44 573.497L1280 573.497V714.395Z"
                                    fill="black"
                                />
                                <path d="M0 0H1280V573.497L1.70053e-05 573.497L0 0Z" fill="white" />
                            </mask>
                        </defs>
                    </svg>
                </div>
            </MainLayout>
        </>
    );
}
