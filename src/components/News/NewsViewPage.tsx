'use client';
import { useState, useEffect } from 'react';
import MainLayout from '@/components/MainLayout';
import Style from '@styles/appStyles/NewsView.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useIndexNews } from '@/hooks/useIndexNews';
import { formatDate } from '@/utils/formatDate';
import { splitText } from '@/utils/splitText';
import { convertSlugText } from '@/utils/convertSlugText';
import LoadingContainer from '../Loading/LoadingContainer';

export default function NewsViewPage() {
    const { news, isLoading } = useIndexNews();
    const [charLimit, setCharLimit] = useState(80);
    const [headerCharLimit, setHeaderCharLimit] = useState(55);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1000) {
                setCharLimit(55);
                setHeaderCharLimit(10);
            } else {
                setCharLimit(80);
                setHeaderCharLimit(15);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <MainLayout>
            <div className={Style.container}>
                <h2>ニュース・ブログ一覧</h2>
                <div className={Style.itemBox}>
                    {isLoading ? (
                        <LoadingContainer />
                    ) : (
                        news.map((item: any) => {
                            const date = formatDate(item.news_timestamp);
                            const tagClass = item.news_type === 'ブログ更新' ? Style.blogTag : Style.tourTag;

                            return (
                                <div key={item.id} className={Style.newsItem}>
                                    <Link
                                        href={`/news/${convertSlugText(item.header.text)}-${item.id}.html`}
                                        scroll={true}
                                    >
                                        <div className={Style.newsContent}>
                                            <p className={Style.thumb}>
                                                <Image
                                                    src={item.image.file.url}
                                                    alt={item.header.text}
                                                    width={367}
                                                    height={204}
                                                    priority
                                                />
                                            </p>
                                            <div className={Style.item}>
                                                <div className={Style.data}>
                                                    <p>{date}</p>
                                                </div>
                                                <p className={tagClass}>{item.news_type}</p>
                                            </div>
                                            <h3 className={Style.newsTtl}>
                                                {splitText(item.header.text, headerCharLimit)}
                                            </h3>
                                            <p className={Style.newsText}>
                                                {splitText(item.paragraph.text, charLimit)}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </MainLayout>
    );
}
