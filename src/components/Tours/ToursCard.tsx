'use client';
import Style from '@styles/componentsStyles/Tours/ToursCard.module.scss';
import Image from 'next/image';
import { splitText } from '@/utils/splitText';
import { convertSlugText } from '@/utils/convertSlugText';

interface ToursCardProps {
    tour: {
        id: string;
        tour_info: {
            location: string;
            name: string;
            description: string;
            price: string;
            days: string;
        };
        first_destination_image: string | null;
    };
}

export default function ToursCard({ tour }: ToursCardProps) {
    return (
        <div className={Style.toursWrap}>
            <a href={`/tours/${convertSlugText(tour.tour_info.name)}-${tour.id}.html`}>
                <div className={Style.toursContent}>
                    <p className={Style.thumb}>
                        {tour.first_destination_image ? (
                            <Image
                                src={tour.first_destination_image}
                                alt={tour.tour_info.name}
                                width={367}
                                height={204}
                                priority
                            />
                        ) : (
                            <span>画像がございません</span>
                        )}
                    </p>
                    <h3 className={Style.toursTtl}>{tour.tour_info.name}</h3>
                    <p className={Style.toursText}>{splitText(tour.tour_info.description, 100)}</p>
                </div>
            </a>
        </div>
    );
}
