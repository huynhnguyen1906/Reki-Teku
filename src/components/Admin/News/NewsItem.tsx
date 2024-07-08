import Style from '@styles/componentsStyles/Admin/NewsItem.module.scss';
import { FaTrash } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import { AdminNewsView } from '@/types/AdminNewsView';
import { formatDate } from '@/utils/formatDate';

interface NewsItemProps {
    newsItem: AdminNewsView;
}

const truncateString = (str: string, num: number) => {
    return str.length > num ? str.slice(0, num) + '...' : str;
};

export default function NewsItem({ newsItem }: NewsItemProps) {
    const formattedHeader = newsItem.header && newsItem.header.text ? truncateString(newsItem.header.text, 13) : '';
    const formattedText = newsItem.text && newsItem.text.text ? truncateString(newsItem.text.text, 20) : '';
    const formattedTimestamp = newsItem.news_timestamp ? formatDate(newsItem.news_timestamp) : '';

    const getTagClassName = (newsType: string) => {
        if (newsType === 'ツアー追加') return Style.tourAddTag;
        if (newsType === 'ブログ更新') return Style.blogAddTag;
        return '';
    };

    return (
        <div className={Style.NewsItem}>
            <div className={Style.newsHeader}>
                <p>{formattedHeader || '記事のタイトルがございません'}</p>
            </div>
            <div className={Style.newsText}>
                <p>{formattedText || '記事のテキストがございません'}</p>
            </div>
            <div className={Style.newsTag}>
                <div className={getTagClassName(newsItem.news_type)}>{newsItem.news_type}</div>
            </div>
            <div className={Style.newTimestamp}>
                <p>{formattedTimestamp}</p>
            </div>
            <div className={Style.btnBox}>
                <FaEdit />
                <FaTrash />
            </div>
        </div>
    );
}
