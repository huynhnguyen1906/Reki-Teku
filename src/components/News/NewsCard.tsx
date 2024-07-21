import Style from '@styles/componentsStyles/News/NewsCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { IoMdTime } from 'react-icons/io';
import { splitText } from '@/utils/splitText';
import { formatDate } from '@/utils/formatDate';
interface NewsCardProps {
    news: {
        id: string;
        news_type: string;
        news_timestamp: { seconds: number; nanoseconds: number };
        header: { text: string };
        paragraph: { text: string };
        image: { file: { url: string } };
    };
}

export default function NewsCard({ news }: NewsCardProps) {
    const date = formatDate(news.news_timestamp);
    const tagClass = news.news_type === 'ブログ更新' ? Style.blogTag : Style.tourTag;

    return (
        <div className={Style.newsWrap}>
            <Link href={`/news/${news.id}`}>
                <div className={Style.newsContent}>
                    <p className={Style.thumb}>
                        <Image src={news.image.file.url} alt="news image" width={367} height={204} priority />
                    </p>
                    <div className={Style.item}>
                        <div className={Style.data}>
                            <IoMdTime size={15} />
                            <p>{date}</p>
                        </div>
                        <p className={tagClass}>{news.news_type}</p>
                    </div>
                    <h3 className={Style.newsTtl}>{news.header.text}</h3>
                    <p className={Style.newsText}>{splitText(news.paragraph.text, 100)}</p>
                </div>
            </Link>
        </div>
    );
}
