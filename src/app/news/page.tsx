'use client';
import MainLayout from '@/components/MainLayout';
import Style from '@styles/appStyles/NewsView.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useIndexNews } from '@/hooks/useIndexNews';
import { formatDate } from '@/utils/formatDate';
import { splitText } from '@/utils/splitText';

export default function News() {
    const { news } = useIndexNews();

    return (
        <MainLayout>
            <div className={Style.container}>
                <h2>ニュース・ブログ一覧</h2>
                <div className={Style.itemBox}>
                    {news &&
                        news.map((item: any) => {
                            const date = formatDate(item.news_timestamp);
                            const tagClass = item.news_type === 'ブログ更新' ? Style.blogTag : Style.tourTag;

                            return (
                                <div key={item.id} className={Style.newsItem}>
                                    <Link href={`/news/${item.id}`}>
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
                                            <h3 className={Style.newsTtl}>{item.header.text}</h3>
                                            <p className={Style.newsText}>{splitText(item.paragraph.text, 80)}</p>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                </div>
            </div>
        </MainLayout>
    );
}
