'use client';
import { useLayoutEffect } from 'react';
import Style from '@styles/componentsStyles/Index/VisualContent.module.scss';

export default function VisualContent() {
    useLayoutEffect(() => {
        const updateClipPath = () => {
            const imgDiv = document.getElementById('imgDiv');
            if (imgDiv) {
                const width = window.innerWidth;
                const height = window.innerHeight;
                const path = `M0 2.5V${height - 50}C${width * 0.026} ${height - 36.333} ${width * 0.087} ${height} ${
                    width * 0.125
                } ${height}C${width * 0.163} ${height} ${width * 0.271} ${height - 10} ${width * 0.297} ${
                    height - 20
                }C${width * 0.353} ${height - 31} ${width * 0.441} ${height - 104.5} ${width * 0.559} ${
                    height - 104.5
                }C${width * 0.672} ${height - 104.5} ${width * 0.773} ${height + 100} ${width * 1.3} ${
                    height - 224.5
                }C${width * 0.903} ${height - 223.3} ${width * 0.983} ${height - 199.667} ${width} ${height - 188}V0H0`;
                imgDiv.style.clipPath = `path('${path}')`;
            }
        };

        updateClipPath();
        window.addEventListener('resize', updateClipPath);

        return () => window.removeEventListener('resize', updateClipPath);
    }, []);

    return <div id="imgDiv" className={Style.imgDiv}></div>;
}
