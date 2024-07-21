import React from 'react';
import Image from 'next/image';
import Style from '@styles/componentsStyles/Tours/ScheduleItem.module.scss';

export default function ScheduleItem() {
    return (
        <div className={Style.schedContent}>
            <div className={Style.pic}>
                <Image src="/images/tours/day2_1.png" alt="今津元寇防塁" width={650} height={366} />
                <p className={Style.place}>
                    DAY1_①<span>板付遺跡(博多区)</span>
                </p>
            </div>
            <div className={Style.text}>
                <p>~日本最古の稲作跡~</p>
                <p>
                    古代の福岡にタイムスリップ！？
                    <br />
                    弥生時代の集落跡を見学!!
                </p>
            </div>
        </div>
    );
}
