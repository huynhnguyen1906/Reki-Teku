'use client';
import Style from '@styles/appStyles/News.module.scss';
import Image from 'next/image';
import { IoMdTime } from 'react-icons/io';
import MainLayout from '@/components/MainLayout';
import NewsContainer from '@/components/News/NewsContainer';
import { formatDate } from '@/utils/formatDate';
import React from 'react';

type NewsPageProps = {
    news: {
        id: string;
        news_type: string;
        news_timestamp: { seconds: number; nanoseconds: number };
        news_data: {
            blocks: Array<{ type: string; data: { [key: string]: any } }>;
        };
    };
};

export default function NewsPage({ news }: NewsPageProps) {
    const { news_timestamp, news_type, news_data } = news;
    const date = formatDate(news_timestamp);

    const tagClass = news_type === 'ブログ更新' ? Style.blogTag : Style.tourTag;
    const blocks = news_data.blocks;

    const firstImage = blocks[0]?.data?.file?.url;
    const headerText = blocks[1]?.data?.text;
    console.log(blocks[7]?.data);
    return (
        <MainLayout>
            {news && (
                <>
                    <div className={Style.blogWrap}>
                        <div className={Style.blogHeader}>
                            {firstImage && (
                                <div>
                                    <Image src={firstImage} alt="" width={1000} height={490} priority />
                                </div>
                            )}
                            <div className={Style.item}>
                                <div className={Style.time}>
                                    <IoMdTime />
                                    <p>{date}</p>
                                </div>
                                <p className={tagClass}>{news_type}</p>
                            </div>
                            <h2 className={Style.ttl}>{headerText}</h2>
                        </div>

                        {blocks.slice(2)?.map((block: any, index: any) => {
                            switch (block.type) {
                                case 'paragraph':
                                    return (
                                        <p key={index} className={Style.text}>
                                            {block.data.text}
                                        </p>
                                    );
                                case 'header':
                                    return React.createElement(
                                        `h${block.data.level}`,
                                        {
                                            key: index,
                                            className: `${Style.ttl} ${Style[`h${block.data.level}`]}`,
                                        },
                                        block.data.text,
                                    );
                                case 'image':
                                    return (
                                        <div key={index} className={Style.picWrap}>
                                            <p className={Style.pic}>
                                                <Image
                                                    src={block.data.file.url}
                                                    alt=""
                                                    width={800}
                                                    height={610}
                                                    priority
                                                />
                                            </p>
                                            <p className={Style.sup}>{block.data.caption}</p>
                                        </div>
                                    );
                                case 'list':
                                    const ListTag = block.data.style === 'ordered' ? 'ol' : 'ul';
                                    return (
                                        <ListTag key={index} className={Style.list}>
                                            {block.data.items.map((item: string, i: number) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ListTag>
                                    );
                                case 'quote':
                                    return (
                                        <div key={index} className={Style.quote}>
                                            <div className={Style.quoteText}>{block.data.text}</div>
                                            {block.data.caption && (
                                                <div className={Style.quoteCaption}>{block.data.caption}</div>
                                            )}
                                        </div>
                                    );
                                case 'delimiter':
                                    return <div key={index} className={Style.delimiter} />;
                                case 'checklist':
                                    return (
                                        <ul key={index} className={Style.checklist}>
                                            {block.data.items.map((item: any, i: number) => (
                                                <li key={i} className={Style.checklistItem}>
                                                    <input type="checkbox" checked={item.checked} readOnly />
                                                    <span>{item.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </div>
                    <div className={Style.swapContent}>
                        <div className={Style.contentTtl}>
                            <Image src="/images/logo-black.svg" alt="" width={40} height={40} />
                            <h2>他のツアー</h2>
                        </div>
                        <NewsContainer />
                    </div>
                </>
            )}
        </MainLayout>
    );
}
