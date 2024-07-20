'use client';

import Style from '@styles/componentsStyles/Admin/NewsItem.module.scss';
import { FaTrash } from 'react-icons/fa6';
import { RiDeviceRecoverLine } from 'react-icons/ri';
import { AdminNewsView } from '@/types/AdminNewsView';
import { formatDate } from '@/utils/formatDate';
import axios from 'axios';
import { toast } from 'react-toastify';
import HoverText from '@/components/Admin/HoverText';

interface NewsItemProps {
    newsItem: AdminNewsView;
    onDelete: (id: string) => void;
}

const truncateString = (str: string, num: number) => {
    return str.length > num ? str.slice(0, num) + '...' : str;
};

export default function DeletedNewsItem({ newsItem, onDelete }: NewsItemProps) {
    const formattedHeader = newsItem.header && newsItem.header.text ? truncateString(newsItem.header.text, 13) : '';
    const formattedText = newsItem.text && newsItem.text.text ? truncateString(newsItem.text.text, 20) : '';
    const formattedTimestamp = newsItem.news_timestamp ? formatDate(newsItem.news_timestamp) : '';

    const getTagClassName = (newsType: string) => {
        if (newsType === 'ツアー追加') return Style.tourAddTag;
        if (newsType === 'ブログ更新') return Style.blogAddTag;
        return '';
    };

    const handleRecover = async () => {
        try {
            const response = await axios.post('/api/recover-item', { id: newsItem.id, type: 'news' });
            if (response.status === 200) {
                toast.success('記事が復元されました');
                onDelete(newsItem.id);
            } else {
                toast.error('記事の復元に失敗しました');
            }
        } catch (error) {
            console.error('Error recovering news item:', error);
            toast.error('記事の復元に失敗しました');
        }
    };

    const handleDeletePermanently = async () => {
        const confirmDelete = window.confirm('本当にこの記事を完全に削除しますか？');
        if (!confirmDelete) return;

        try {
            const response = await axios.post('/api/delete-item-permanently', { id: newsItem.id, type: 'news' });
            if (response.status === 200) {
                toast.success('記事が完全に削除されました');
                onDelete(newsItem.id);
            } else {
                toast.error('記事の削除に失敗しました');
            }
        } catch (error) {
            console.error('Error deleting news item permanently:', error);
            toast.error('記事の削除に失敗しました');
        }
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
                <HoverText icon={<RiDeviceRecoverLine onClick={handleRecover} />} text="復元" />
                <HoverText icon={<FaTrash onClick={handleDeletePermanently} />} text="完全に削除" />
            </div>
        </div>
    );
}
