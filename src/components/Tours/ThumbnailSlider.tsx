'use client';
import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';
import '@styles/componentsStyles/Tours/ThumbnailSlider.scss';

export default function ThumbnailSlider({ schedule }: { schedule: any }) {
    console.log(schedule);
    useEffect(() => {
        const mainSlider = new Splide('#main-slider', {
            type: 'fade',
            rewind: true,
            pagination: false,
            arrows: false,
        });

        const thumbnailSlider = new Splide('#thumbnail-slider', {
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
    }, []);

    return (
        <div className="splideContainer">
            <div id="main-slider" className="splide mainSliderContainer">
                <div className="splide__track">
                    <ul className="splide__list mainSlider">
                        {schedule?.map((day: any, dayIndex: number) =>
                            day.destinations.map((destination: any, destIndex: number) => (
                                <li key={`main-${dayIndex}-${destIndex}`} className="splide__slide">
                                    <Image
                                        src={destination.image}
                                        alt={destination.description}
                                        width={1000}
                                        height={1000}
                                    />
                                </li>
                            )),
                        )}
                    </ul>
                </div>
            </div>

            <div id="thumbnail-slider" className="splide thumbnail-slider">
                <div className="splide__track">
                    <ul className="splide__list thumbnail">
                        {schedule?.map((day: any, dayIndex: number) =>
                            day.destinations.map((destination: any, destIndex: number) => (
                                <li key={`main-${dayIndex}-${destIndex}`} className="splide__slide">
                                    <Image
                                        src={destination.image}
                                        alt={destination.description}
                                        width={1000}
                                        height={1000}
                                    />
                                </li>
                            )),
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
