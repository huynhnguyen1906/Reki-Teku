'use client';
import { useEffect, useState } from 'react';
import Style from '@styles/componentsStyles/Index/VisualContent.module.scss';

const images = ['/images/mainVisual.webp', '/images/mainVisual2.webp', '/images/mainVisual3.webp'];

export default function VisualContent() {
    const [currentImage, setCurrentImage] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const updateClipPath = () => {
            const VisualContent = document.getElementById('VisualContent');
            if (VisualContent) {
                const width = window.innerWidth;
                const height = VisualContent.getBoundingClientRect().height;

                let path;
                if (width < 912) {
                    path = `M0 ${height - 75.5}V0H${width}V${height - 100}C${width * 0.35} ${height - 100} ${
                        width * 0.15
                    } ${height} 0.5 ${height - 75.5}Z`;
                } else {
                    path = `M0 2.5V${height - 50}C${width * 0.026} ${height - 36.333} ${width * 0.2} ${height} ${
                        width * 0.195
                    } ${height - 3}C${width * 0.2} ${height} ${width * 0.26} ${height - 0} ${width * 0.315} ${
                        height - 20
                    }C${width * 0.353} ${height - 31} ${width * 0.441} ${height - 104.5} ${width * 0.559} ${
                        height - 104.5
                    }C${width * 0.672} ${height - 104.5} ${width * 0.773} ${height + 100} ${width * 1.3} ${
                        height - 224.5
                    }C${width * 0.903} ${height - 223.3} ${width * 0.983} ${height - 199.667} ${width} ${
                        height - 188
                    }V0H0`;
                }

                VisualContent.style.clipPath = `path('${path}')`;
            }
        };

        const interval = setInterval(() => {
            setOpacity(0.2);
            setTimeout(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % images.length);
                setOpacity(1);
            }, 500);
        }, 3000);

        updateClipPath();
        window.addEventListener('resize', updateClipPath);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', updateClipPath);
        };
    }, []);

    return (
        <div id="VisualContent" className={Style.VisualContent}>
            <div
                className={`${Style.background}`}
                style={{
                    backgroundImage: `url('/images/03_bg_overlay.png'),
                        linear-gradient(270deg, rgba(17, 17, 17, 0.3) 0%, rgba(17, 17, 17, 0) 44.5%),
                        url(${images[currentImage]})`,
                    opacity: opacity,
                }}
            ></div>
            <div className={Style.HeroTextLeft}>
                <div>
                    <span>川が大きな流れから</span>
                    <span>小さく枝分かれしていくように、</span>
                    <span>歴史も枝分かれしていきます。</span>
                    <span>「歴てく」は、枝分かれした</span>
                    <span>歴史のサイドストーリーを知る旅を</span>
                    <span>あなたにご提供します。</span>
                </div>
            </div>
            <div className={Style.HeroTextRight}>
                <div>
                    <span>自分の目と足で歴史の</span>
                    <br />
                    <span>『サイドストーリー』</span>
                    <br />
                    <span>を探求し人生を深める</span>
                </div>
            </div>
        </div>
    );
}
