import React from 'react';
import Style from '@styles/appStyles/Tours.module.scss';
import ToursContainer from '@/components/Tours/ToursContainer';
import Image from 'next/image';
import { IoMdPin } from 'react-icons/io';
import Link from 'next/link';
import MainLayout from '@/components/MainLayout';
import ThumbnailSlider from '@/components/Tours/ThumbnailSlider';
import PointWrap from '@/components/Tours/PointWrap';

export default function TourPage({ tour }: { tour: any }) {
    if (!tour) return null;
    const tourInfo = tour.tour_info || {};

    return (
        <MainLayout>
            {tour && (
                <>
                    <div className={Style.container}>
                        <div className={Style.toursWrap}>
                            <div className={Style.toursContent}>
                                <div className={Style.pref}>
                                    <IoMdPin color="#D04848" />
                                    <p className={Style.place}>{tourInfo.location}</p>
                                </div>
                                <h1 className={Style.toursTtl}>{tourInfo.name}</h1>
                                <p className={Style.toursPrice}>
                                    ￥{tourInfo.price}　{tourInfo.days}
                                </p>
                                <p className={Style.text}>{tourInfo.description}</p>
                                <p className={Style.attn}>※ツアー内容の変更可能ですので、お問い合わせください</p>
                                <div className={Style.appt}>
                                    <p>集合・解散場所</p>
                                    <p>{tourInfo.meetingPoint}</p>
                                    <p>(詳細はLINEでお知らせします)</p>
                                </div>
                            </div>
                            <ThumbnailSlider schedule={tour.schedule} />
                        </div>
                        <PointWrap tour={tour} />
                        <div className={Style.tourList}>
                            <div className={Style.contentTtl}>
                                <Image src="/images/logo-black.svg" alt="" width={40} height={40} />
                                <h2>他のツアー</h2>
                            </div>
                            <ToursContainer />
                        </div>
                    </div>
                </>
            )}
        </MainLayout>
    );
}
