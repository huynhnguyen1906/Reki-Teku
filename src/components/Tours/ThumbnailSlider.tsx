'use client';
import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';
import '@styles/componentsStyles/Tours/ThumbnailSlider.scss';

export default function ThumbnailSlider() {
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
                        <li className="splide__slide">
                            <Image src="/images/blog_osaka/picture_01.webp" alt="Image 1" width={1000} height={1000} />
                        </li>
                        <li className="splide__slide">
                            <Image src="/images/blog_osaka/picture_02.webp" alt="Image 2" width={1000} height={1000} />
                        </li>
                        <li className="splide__slide">
                            <Image src="/images/blog_osaka/picture_03.webp" alt="Image 3" width={1000} height={1000} />
                        </li>
                        <li className="splide__slide">
                            <Image src="/images/blog_osaka/picture_04.webp" alt="Image 4" width={1000} height={1000} />
                        </li>
                        <li className="splide__slide">
                            <Image src="/images/blog_osaka/picture_05.webp" alt="Image 5" width={1000} height={1000} />
                        </li>
                        <li className="splide__slide">
                            <Image src="/images/blog_osaka/picture_06.webp" alt="Image 5" width={1000} height={1000} />
                        </li>
                    </ul>
                </div>
            </div>

            <div id="thumbnail-slider" className="splide thumbnail-slider">
                <div className="splide__track">
                    <ul className="splide__list thumbnail">
                        <li className="splide__slide">
                            <Image
                                src="/images/blog_osaka/picture_01.webp"
                                alt="Thumbnail 1"
                                width={1000}
                                height={1000}
                            />
                        </li>
                        <li className="splide__slide">
                            <Image
                                src="/images/blog_osaka/picture_02.webp"
                                alt="Thumbnail 2"
                                width={1000}
                                height={1000}
                            />
                        </li>
                        <li className="splide__slide">
                            <Image
                                src="/images/blog_osaka/picture_03.webp"
                                alt="Thumbnail 3"
                                width={1000}
                                height={1000}
                            />
                        </li>
                        <li className="splide__slide">
                            <Image
                                src="/images/blog_osaka/picture_04.webp"
                                alt="Thumbnail 4"
                                width={1000}
                                height={1000}
                            />
                        </li>
                        <li className="splide__slide">
                            <Image
                                src="/images/blog_osaka/picture_05.webp"
                                alt="Thumbnail 5"
                                width={1000}
                                height={1000}
                            />
                        </li>
                        <li className="splide__slide">
                            <Image
                                src="/images/blog_osaka/picture_06.webp"
                                alt="Thumbnail 5"
                                width={1000}
                                height={1000}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
