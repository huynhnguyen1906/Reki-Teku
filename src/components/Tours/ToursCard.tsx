'use client';
import Style from '@styles/componentsStyles/Tours/ToursCard.module.scss';
import Image from 'next/image';
import { splitText } from '@/utils/splitText';
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
        first_destination_image: string;
    };
}

export default function ToursCard({ tour }: ToursCardProps) {
    return (
        <div className={Style.toursWrap}>
            <a href={`/tours/${tour.id}`}>
                <div className={Style.toursContent}>
                    <p className={Style.thumb}>
                        <Image
                            src={tour.first_destination_image}
                            alt={tour.tour_info.name}
                            width={367}
                            height={204}
                            priority
                        />
                    </p>
                    <h3 className={Style.toursTtl}>{tour.tour_info.name}</h3>
                    <p className={Style.toursText}>{splitText(tour.tour_info.description, 100)}</p>
                </div>
            </a>
        </div>
    );
}
