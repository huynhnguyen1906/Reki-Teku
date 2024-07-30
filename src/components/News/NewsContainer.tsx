'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow } from 'swiper/modules';

import Style from '@styles/componentsStyles/News/NewsContainer.module.scss';
import NewsCard from './NewsCard';
import NewsPagination from './NewsPagination';
import { useIndexNews } from '@/hooks/useIndexNews';

export default function NewsContainer() {
    const { news } = useIndexNews();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const totalPages = Math.ceil((news?.length || 0) / itemsPerPage);
    const [isMobile, setIsMobile] = useState(false);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const getCurrentPageNews = () => {
        if (!news) return [];
        const startIndex = (currentPage - 1) * itemsPerPage;
        return news.slice(startIndex, startIndex + itemsPerPage);
    };

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
            {news && (
                <>
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
                            {news?.map((newsItem: any) => (
                                <SwiperSlide key={newsItem.id} className={Style.SwiperSlide}>
                                    <NewsCard news={newsItem} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <>
                            <div className={Style.ItemBox}>
                                {getCurrentPageNews().map((newsItem: any) => (
                                    <NewsCard key={newsItem.id} news={newsItem} />
                                ))}
                            </div>
                            <NewsPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </>
                    )}
                </>
            )}
        </div>
    );
}
