'use client';
import { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';
import '@styles/componentsStyles/Tours/ThumbnailSlider.scss';

export default function ThumbnailSlider({ schedule }: { schedule: any }) {
    const mainSliderRef = useRef(null);
    const thumbnailSliderRef = useRef(null);

    useEffect(() => {
        if (mainSliderRef.current && thumbnailSliderRef.current && schedule?.length) {
            const mainSlider = new Splide(mainSliderRef.current, {
                type: 'fade',
                rewind: true,
                pagination: false,
                arrows: false,
            });

            const thumbnailSlider = new Splide(thumbnailSliderRef.current, {
                fixedWidth: 100,
                fixedHeight: 60,
                gap: 10,
                rewind: true,
                pagination: false,
                cover: true,
                isNavigation: true,
                breakpoints: {
                    600: {
                        fixedWidth: 60,
                        fixedHeight: 44,
                    },
                },
            });

            mainSlider.sync(thumbnailSlider);
            mainSlider.mount();
            thumbnailSlider.mount();
        }
    }, [schedule]);

    return (
        <div className="splideContainer">
            {schedule && schedule.length > 0 ? (
                <>
                    <div id="main-slider" className="splide mainSliderContainer" ref={mainSliderRef}>
                        <div className="splide__track">
                            <ul className="splide__list mainSlider">
                                {schedule.map((day: any, dayIndex: number) =>
                                    day.destinations?.map((destination: any, destIndex: number) => (
                                        <li key={`main-${dayIndex}-${destIndex}`} className="splide__slide">
                                            <Image
                                                src={destination.image}
                                                alt={destination.description}
                                                width={1000}
                                                height={1000}
                                                priority
                                            />
                                        </li>
                                    )),
                                )}
                            </ul>
                        </div>
                    </div>

                    <div id="thumbnail-slider" className="splide thumbnail-slider" ref={thumbnailSliderRef}>
                        <div className="splide__track">
                            <ul className="splide__list thumbnail">
                                {schedule.map((day: any, dayIndex: number) =>
                                    day.destinations?.map((destination: any, destIndex: number) => (
                                        <li key={`thumb-${dayIndex}-${destIndex}`} className="splide__slide">
                                            <Image
                                                src={destination.image}
                                                alt={destination.description}
                                                width={1000}
                                                height={1000}
                                                priority
                                            />
                                        </li>
                                    )),
                                )}
                            </ul>
                        </div>
                    </div>
                </>
            ) : (
                <span>画像がございません</span>
            )}
        </div>
    );
}
