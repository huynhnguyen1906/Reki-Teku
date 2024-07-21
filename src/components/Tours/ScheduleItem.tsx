import React from 'react';
import Image from 'next/image';
import Style from '@styles/componentsStyles/Tours/ScheduleItem.module.scss';
import { formatTextWithLineBreaks } from '@/utils/formatTextWithLineBreaks ';

interface ScheduleItemProps {
    day: number;
    destination: string;
    description: string;
    image: string;
}

export default function ScheduleItem({ day, destination, description, image }: ScheduleItemProps) {
    const formattedDescription = formatTextWithLineBreaks(description);
    return (
        <div className={Style.schedContent}>
            <div className={Style.pic}>
                <Image src={image} alt={destination} width={650} height={366} priority />
                <p className={Style.place}>
                    DAY{day}
                    <span>{destination}</span>
                </p>
            </div>
            <div className={Style.text} dangerouslySetInnerHTML={{ __html: formattedDescription }}></div>
        </div>
    );
}
