import Style from '@styles/componentsStyles/Admin/ToursItem.module.scss';
import { FaTrash } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import { AdminTourView } from '@/types/AdminTourView';

interface TourItemProps {
    TourItem: AdminTourView;
}

const truncateString = (str: string, num: number) => {
    return str.length > num ? str.slice(0, num) + '...' : str;
};

export default function TourItem({ TourItem }: TourItemProps) {
    const formattedName = TourItem.name ? truncateString(TourItem.name, 13) : '';
    const formattedDes = TourItem.description ? truncateString(TourItem.description, 20) : '';
    const formattedApplyPoint = TourItem.applyPoint ? truncateString(TourItem.applyPoint, 13) : '';
    return (
        <div className={Style.TourItem}>
            <div className={Style.tourName}>
                <p>{formattedName || '記事のタイトルがございません'}</p>
            </div>
            <div className={Style.TourDes}>
                <p>{formattedDes || '記事のテキストがございません'}</p>
            </div>
            <div className={Style.TourApplyPoint}>
                <p>{formattedApplyPoint}</p>
            </div>
            <div className={Style.btnBox}>
                <FaEdit />
                <FaTrash />
            </div>
        </div>
    );
}
