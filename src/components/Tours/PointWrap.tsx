'use client';

import React, { useState, useEffect } from 'react';
import Schedule from '@/components/Tours/Schedule';
import Notes from '@/components/Tours/Notes';
import { formatTextWithLineBreaks } from '@/utils/formatTextWithLineBreaks ';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';
import Style from '@styles/componentsStyles/Tours/PointWrap.module.scss';
import Image from 'next/image';

function parsePrice(price: string): number {
    const numericPrice = price.replace(/[^\d]/g, '');
    return parseInt(numericPrice, 10);
}

export default function PointWrap({ tour }: { tour: any }) {
    const [activeTab, setActiveTab] = useState('schedule');
    const [numPeople, setNumPeople] = useState(2);
    const [totalPrice, setTotalPrice] = useState(0);
    const [startDate, setStartDate] = useState('');
    const tourInfo = tour.tour_info || {};
    const tourSchedule = tour.schedule;
    const tourMap = tour.tour_info.mapIframe;
    const tourPrice = tourInfo.price ? parsePrice(tourInfo.price) : 0;
    const tourApplyPoint = tourInfo.applyPoint ? formatTextWithLineBreaks(tourInfo.applyPoint) : '';

    useEffect(() => {
        setTotalPrice(tourPrice * numPeople);
    }, [numPeople, tourPrice]);

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        setStartDate(formattedDate);
    }, []);

    const renderContent = () => {
        if (activeTab === 'schedule') {
            return <Schedule schedule={tourSchedule} tourMap={tourMap} />;
        } else {
            return <Notes />;
        }
    };

    const handleNumPeopleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setNumPeople(Number(e.target.value));
    };

    return (
        <div className={Style.pointWrap}>
            <div className={Style.contentTtl}>
                <Image src="/images/logo-black.svg" alt="" width={40} height={40} />
                <h2>おすすめポイント</h2>
            </div>
            <div className={Style.pointContent}>
                <p className={Style.text} dangerouslySetInnerHTML={{ __html: tourApplyPoint }}></p>

                <div className={Style.sinWrap}>
                    <div className={Style.border}>
                        <div className={Style.date}>
                            <p>開始日</p>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>
                        <p className={Style.line}></p>
                        <div className={Style.num}>
                            <p>人数</p>
                            <select id="num" value={numPeople} onChange={handleNumPeopleChange}>
                                <option value="1">1名様</option>
                                <option value="2">2名様</option>
                                <option value="3">3名様</option>
                                <option value="4">4名様</option>
                                <option value="5">5名様</option>
                                <option value="6">6名様</option>
                                <option value="7">7名様</option>
                                <option value="8">8名様</option>
                                <option value="9">9名様</option>
                                <option value="10">10名様</option>
                            </select>
                        </div>
                    </div>

                    <div className={Style.detail}>
                        <p>人数×{numPeople}</p>
                        <p>¥{totalPrice}</p>
                    </div>
                    <p className={Style.line}></p>
                    <div className={Style.total}>
                        <p>合計</p>
                        <p>¥{totalPrice}</p>
                    </div>
                    <div className={Style.lineBtn}>
                        <Link href="https://lin.ee/6Ak2Mo3" scroll={true}>
                            LINEで確認する
                        </Link>
                        <FaExternalLinkAlt color="#fffdf7" />
                    </div>
                </div>
            </div>

            <div className={Style.item}>
                <button
                    className={activeTab === 'schedule' ? Style.active : ''}
                    onClick={() => setActiveTab('schedule')}
                >
                    スケジュール
                </button>
                <button className={activeTab === 'notes' ? Style.active : ''} onClick={() => setActiveTab('notes')}>
                    ご確認・注意事項
                </button>
            </div>
            {renderContent()}
        </div>
    );
}
