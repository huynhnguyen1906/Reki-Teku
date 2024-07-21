'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { MdArrowRightAlt } from 'react-icons/md';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import '@styles/componentsStyles/Index/Slider.scss';
import TextStyle from '@styles/appStyles/Tours.module.scss';

export default function ToursSlider() {
    return (
        <>
            <svg width="0" height="0" style={{ position: 'absolute', zIndex: -1 }}>
                <defs>
                    <clipPath id="myClipPath" clipPathUnits="objectBoundingBox">
                        <path d="M0.75,0.12 C0.7,0.08 0.68,0.02 0.57,0 C0.5,-0.02 0.39,0.03 0.2,0.13 C0,0.23 -0.05,0.64 0.06,0.8 C0.17,0.96 0.28,0.88 0.45,0.9 C0.62,0.92 0.75,1 0.82,1 C0.89,1 1,0.93 1,0.67 C1,0.42 0.95,0.26 0.92,0.2 C0.89,0.14 0.8,0.14 0.75,0.12 Z" />
                    </clipPath>
                </defs>
            </svg>
            <Swiper rewind={true} navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="tourImg">
                        <Image src="/images/mainVisual.webp" alt="aaaa" width={480} height={320} />
                    </div>
                    <div className="tourInfo">
                        <p className={TextStyle.toursPrice}>¥~1,5000 1泊2日</p>
                        <h2 className={TextStyle.toursTtl}>古代~室町 博多の歴史</h2>
                        <p className="toursText">
                            福岡は、古来より海外との接点を持ち続けてきた日本で唯一の地です。このツアーでは、福岡に点在する各時代を代表する史跡を巡りながら、その歴史的背景と意義を探ります。時系列に沿って訪れることで、福岡の歴史の流れをより深く理解していただけます。
                        </p>
                        <p className="toursNote">※ツアー内容は変更が可能ですので、お気軽にお問い合わせください。</p>
                        <button className="tourButton">
                            <Link href={'/tours'}>
                                詳しく見る
                                <MdArrowRightAlt />
                            </Link>
                        </button>
                    </div>
                    <div className="tourSpot">
                        <div className="mapPin"></div>
                        <p>福岡県</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tourImg">
                        <Image src="/images/mainVisual.webp" alt="aaaa" width={480} height={320} />
                    </div>
                    <div className="tourInfo">
                        <p className={TextStyle.toursPrice}>¥~1,5000 1泊2日</p>
                        <h2 className={TextStyle.toursTtl}>古代~室町 博多の歴史</h2>
                        <p className="toursText">
                            福岡は、古来より海外との接点を持ち続けてきた日本で唯一の地です。このツアーでは、福岡に点在する各時代を代表する史跡を巡りながら、その歴史的背景と意義を探ります。時系列に沿って訪れることで、福岡の歴史の流れをより深く理解していただけます。
                        </p>
                        <p className="toursNote">※ツアー内容は変更が可能ですので、お気軽にお問い合わせください。</p>
                        <button className="tourButton">
                            <Link href={'/tours'}>
                                詳しく見る
                                <MdArrowRightAlt />
                            </Link>
                        </button>
                    </div>
                    <div className="tourSpot">
                        <div className="mapPin"></div>
                        <p>福岡県</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tourImg">
                        <Image src="/images/mainVisual.webp" alt="aaaa" width={480} height={320} />
                    </div>
                    <div className="tourInfo">
                        <p className={TextStyle.toursPrice}>¥~1,5000 1泊2日</p>
                        <h2 className={TextStyle.toursTtl}>古代~室町 博多の歴史</h2>
                        <p className="toursText">
                            福岡は、古来より海外との接点を持ち続けてきた日本で唯一の地です。このツアーでは、福岡に点在する各時代を代表する史跡を巡りながら、その歴史的背景と意義を探ります。時系列に沿って訪れることで、福岡の歴史の流れをより深く理解していただけます。
                        </p>
                        <p className="toursNote">※ツアー内容は変更が可能ですので、お気軽にお問い合わせください。</p>
                        <button className="tourButton">
                            <Link href={'/tours'}>
                                詳しく見る
                                <MdArrowRightAlt />
                            </Link>
                        </button>
                    </div>
                    <div className="tourSpot">
                        <div className="mapPin"></div>
                        <p>福岡県</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
