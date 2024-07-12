'use client';
import { useLayoutEffect } from 'react';
import Style from '@styles/componentsStyles/Index/VisualContent.module.scss';

export default function VisualContent() {
    useLayoutEffect(() => {
        const updateClipPath = () => {
            const imgDiv = document.getElementById('imgDiv');
            if (imgDiv) {
                const width = window.innerWidth;
                const height = window.innerHeight - 60;

                let path;
                if (width < 912) {
                    path = `M0 ${height - 75.5}V0H${width}V${height - 100}C${width * 0.85} ${height} ${width * 0.65} ${
                        height - 50
                    } ${width * 0.5} ${height - 75.5}C${width * 0.35} ${height - 100} ${width * 0.15} ${height} 0.5 ${
                        height - 75.5
                    }Z`;
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

                imgDiv.style.clipPath = `path('${path}')`;
            }
        };

        updateClipPath();
        window.addEventListener('resize', updateClipPath);

        return () => window.removeEventListener('resize', updateClipPath);
    }, []);

    return <div id="imgDiv" className={Style.imgDiv}></div>;
}
