'use client';

import React, { useState } from 'react';
import Schedule from '@/components/Tours/Schedule';
import Notes from '@/components/Tours/Notes';
import { formatTextWithLineBreaks } from '@/utils/formatTextWithLineBreaks ';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';
import Style from '@styles/componentsStyles/Tours/PointWrap.module.scss';
import Image from 'next/image';

export default function PointWrap({ tour }: { tour: any }) {
    const [activeTab, setActiveTab] = useState('schedule');
    const tourInfo = tour.tour_info || {};
    const tourSchedule = tour.schedule;
    const tourMap = tour.tour_info.mapIframe;
    const tourApplyPoint = tourInfo.applyPoint ? formatTextWithLineBreaks(tourInfo.applyPoint) : '';

    const renderContent = () => {
        if (activeTab === 'schedule') {
            return <Schedule schedule={tourSchedule} tourMap={tourMap} />;
        } else {
            return <Notes />;
        }
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
                            <input type="date" name="date" id="date" />
                        </div>
                        <p className={Style.line}></p>
                        <div className={Style.num}>
                            <p>人数</p>
                            <select id="num" defaultValue="2">
                                <option value="1">1名様</option>
                                <option value="2">2名様</option>
                                <option value="3">3名様</option>
                                <option value="4">4名様</option>
                            </select>
                        </div>
                    </div>

                    <div className={Style.detail}>
                        <p>大人×2</p>
                        <p>¥21980</p>
                    </div>
                    <div className={Style.detail}>
                        <p>子供×1</p>
                        <p>¥11980</p>
                    </div>
                    <p className={Style.line}></p>
                    <div className={Style.total}>
                        <p>合計</p>
                        <p>¥33960</p>
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
