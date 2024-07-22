'use client';
import { useEffect, useRef } from 'react';
import Style from '@styles/componentsStyles/Index/IndexDot.module.scss';

export default function IndexDot() {
    const pathRef = useRef<SVGPathElement | null>(null);

    useEffect(() => {
        if (pathRef.current) {
            const pathLength = pathRef.current.getTotalLength();
            pathRef.current.style.strokeDasharray = `${pathLength} ${pathLength}`;
            pathRef.current.style.strokeDashoffset = pathLength.toString();

            const handleScroll = () => {
                const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
                const drawLength = pathLength * scrollPercentage;
                pathRef.current!.style.strokeDashoffset = `${pathLength - drawLength}`;
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className={Style.IndexDot}>
            <svg width="809" height="2793" viewBox="0 0 809 2793" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    ref={pathRef}
                    d="M383.559 2.30312C499.779 -2.20688 617.689 43.8031 698.819 127.413C727.809 157.293 753.369 194.943 752.279 236.563C750.479 305.733 679.929 350.303 616.719 378.443C463.429 446.673 267.009 561.503 135.609 521.683C114.009 515.137 96.4493 505.743 85.0093 492.503C76.5193 482.673 65.0993 447.533 68.5093 435.003C82.9393 381.873 132.899 333.693 218.509 372.503C281.009 400.836 292.009 501.903 285.609 556.593C279.209 611.273 244.669 659.703 201.249 693.563C129.41 749.583 23.7795 783.463 4.59949 872.523C-9.95051 940.073 38.5995 1008.21 99.7995 1040.29C160.999 1072.37 232.259 1077.19 301.049 1083.7C431.85 1096.08 567.999 1119.36 672.389 1199.15C776.779 1278.94 836.499 1431.22 773.489 1546.51C759.479 1572.14 738.119 1596.11 709.639 1602.59C615.541 1624 566.749 1543.2 632.009 1487.75C664.449 1460.19 720.389 1466.11 757.039 1487.75C793.689 1509.4 814.159 1555.41 805.689 1597.13C794.059 1654.4 738.179 1690.25 686.159 1716.88C586.359 1767.95 481.85 1809.81 374.4 1841.75C316.7 1858.9 256.969 1873.73 206.779 1906.97C156.589 1940.21 116.909 1997 122.929 2056.9C130.729 2134.48 207.329 2184.66 278.539 2216.43C378.189 2260.89 483.529 2292.43 591.039 2311.09C630.699 2317.97 671.849 2323.06 710.869 2313.16C749.889 2303.26 786.679 2275.26 796.109 2236.13C808.789 2183.55 765.109 2128.7 712.319 2116.94C659.529 2105.18 603.829 2128.52 563.689 2164.77C520.939 2203.37 491.349 2266.07 514.709 2318.72C536.289 2367.38 592.929 2388.63 630.219 2426.62C680.099 2477.44 691.679 2556.73 676.379 2626.28C663.219 2686.1 632.999 2740.34 599.639 2792.03"
                    stroke="#D2C298"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeDasharray="20 20"
                />
            </svg>
        </div>
    );
}
