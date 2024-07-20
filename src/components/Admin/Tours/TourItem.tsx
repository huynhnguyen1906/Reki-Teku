'use client';

import Style from '@styles/componentsStyles/Admin/ToursItem.module.scss';
import { FaTrash } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import { AdminTourView } from '@/types/AdminTourView';
<<<<<<< HEAD
import HoverText from '../HoverText';
=======
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
>>>>>>> e2e5b5ab331650e0156089c5469d58b6e3219b6b

interface TourItemProps {
    TourItem: AdminTourView;
    onDelete: (id: string) => void;
}

const truncateString = (str: string, num: number) => {
    return str.length > num ? str.slice(0, num) + '...' : str;
};

export default function TourItem({ TourItem, onDelete }: TourItemProps) {
    const router = useRouter();

    const formattedName = TourItem.name ? truncateString(TourItem.name, 13) : '';
    const formattedDes = TourItem.description ? truncateString(TourItem.description, 20) : '';
    const formattedApplyPoint = TourItem.applyPoint ? truncateString(TourItem.applyPoint, 13) : '';

    const handleDelete = async () => {
        try {
            const response = await axios.post('/api/delete-item', { id: TourItem.id, type: 'tours' });
            if (response.status === 200) {
                toast.success('ツアーはごみ箱に移動されました');
                onDelete(TourItem.id);
            } else {
                toast.error('ツアーの削除に失敗しました');
            }
        } catch (error) {
            console.error('Error deleting tour item:', error);
            toast.error('ツアーの削除に失敗しました');
        }
    };

    const handleEdit = () => {
        router.push(`/admin/tours/edit/${TourItem.id}`);
    };

    return (
        <div className={Style.TourItem}>
            <div className={Style.tourName}>
                <p>{formattedName || 'ツアーの名前がございません'}</p>
            </div>
            <div className={Style.TourDes}>
                <p>{formattedDes || 'ツアーの説明がございません'}</p>
            </div>
            <div className={Style.TourApplyPoint}>
                <p>{formattedApplyPoint}</p>
            </div>
            <div className={Style.btnBox}>
<<<<<<< HEAD
                <HoverText icon={<FaEdit />} text="編集" /> 
                <HoverText icon={<FaTrash />} text="削除" /> 
=======
                <FaEdit onClick={handleEdit} />
                <FaTrash onClick={handleDelete} />
>>>>>>> e2e5b5ab331650e0156089c5469d58b6e3219b6b
            </div>
        </div>
    );
}
