'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow } from 'swiper/modules';

import Style from '@styles/componentsStyles/News/NewsContainer.module.scss';
import NewsCard from './NewsCard';
import NewsPagination from './Pagination';

export default function NewsContainer() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 820);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={Style.NewsContainer}>
            {isMobile ? (
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                    }}
                    className={Style.Swiper}
                >
                    <SwiperSlide className={Style.SwiperSlide}>
                        <NewsCard />
                    </SwiperSlide>
                    <SwiperSlide className={Style.SwiperSlide}>
                        <NewsCard />
                    </SwiperSlide>
                    <SwiperSlide className={Style.SwiperSlide}>
                        <NewsCard />
                    </SwiperSlide>
                    <SwiperSlide className={Style.SwiperSlide}>
                        <NewsCard />
                    </SwiperSlide>
                </Swiper>
            ) : (
                <>
                    <div className={Style.ItemBox}>
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                    </div>
                </>
            )}
        </div>
    );
}
