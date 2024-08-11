'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import Style from '@styles/componentsStyles/News/NewsContainer.module.scss';
import ToursCard from '@/components/Tours/ToursCard';
import Pagination from '../News/NewsPagination';
import { useIndexTour } from '@/hooks/useIndexTour';
import ToursPagination from './ToursPagination';

export default function ToursContainer() {
    const { tour } = useIndexTour();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const totalPages = Math.ceil((tour?.length || 0) / itemsPerPage);
    const [isMobile, setIsMobile] = useState(false);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const getCurrentPageTours = () => {
        if (!tour) return [];
        const startIndex = (currentPage - 1) * itemsPerPage;
        return tour.slice(startIndex, startIndex + itemsPerPage);
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
            {tour && (
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
                            {tour?.map((tour: any, index: number) => (
                                <SwiperSlide key={tour.id} className={Style.SwiperSlide}>
                                    <ToursCard tour={tour} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <>
                            <div className={Style.ItemBox}>
                                {getCurrentPageTours()?.map((tour: any) => (
                                    <ToursCard key={tour.id} tour={tour} />
                                ))}
                            </div>
                            <ToursPagination
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
