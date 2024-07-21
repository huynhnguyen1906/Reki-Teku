'use client';

import Style from '@styles/appStyles/News.module.scss';
import Image from 'next/image';
import { IoMdTime } from 'react-icons/io';
import MainLayout from '@/components/MainLayout';
import NewsContainer from '@/components/News/NewsContainer';
import { useNews } from '@/hooks/useNews';
import { useParams } from 'next/navigation';
import { formatDate } from '@/utils/formatDate';

export default function News() {
    const { id } = useParams();
    const documentId = Array.isArray(id) ? id[0] : id;
    const { news } = useNews(documentId);

    if (!news) return;
    const { news_timestamp, news_type, news_data } = news;
    const date = formatDate(news_timestamp);

    const tagClass = news_type === 'ブログ更新' ? Style.blogTag : Style.tourTag;
    const blocks = news_data.blocks;

    const firstImage = blocks[0]?.data?.file?.url;
    const headerText = blocks[1]?.data?.text;

    return (
        <MainLayout>
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
                    if (block.type === 'paragraph') {
                        return (
                            <p key={index} className={Style.text}>
                                {block.data.text}
                            </p>
                        );
                    } else if (block.type === 'image') {
                        return (
                            <div key={index} className={Style.picWrap}>
                                <p className={Style.pic}>
                                    <Image src={block.data.file.url} alt="" width={800} height={610} priority />
                                </p>
                                <p className={Style.sup}>{block.data.caption}</p>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className={Style.swapContent}>
                <div className={Style.contentTtl}>
                    <Image src="/images/logo-black.svg" alt="" width={40} height={40} />
                    <h2>他のツアー</h2>
                </div>
                <NewsContainer />
            </div>
        </MainLayout>
    );
}
