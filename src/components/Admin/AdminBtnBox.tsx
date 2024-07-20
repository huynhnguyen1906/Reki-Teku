'use client';
import Style from '@styles/componentsStyles/Admin/AdminBtnBox.module.scss';
import Button from 'react-bootstrap/Button';
import { FaTrash } from 'react-icons/fa6';
import { FaRegPlusSquare } from 'react-icons/fa';
import { CreateUrl, DeleteUrl } from '@/types/Url';
import { useRouter } from 'next/navigation';
interface AdminBtnBoxProps {
    createUrl: CreateUrl;
    deleteUrl: DeleteUrl;
}

export default function AdminBtnBox({ createUrl, deleteUrl }: AdminBtnBoxProps) {
    const router = useRouter();

    const handleCreateLink = () => {
        router.push(createUrl.url);
    };
    const handleDeleteLink = () => {
        router.push(deleteUrl.url);
    };

    return (
        <div className={Style.btnBox}>
            <Button
                variant="success"
                onClick={() => {
                    handleCreateLink();
                }}
            >
                <FaRegPlusSquare className={Style.icon} />
                {createUrl.name}
            </Button>
            <Button
                variant="danger"
                onClick={() => {
                    handleDeleteLink();
                }}
            >
                <FaTrash className={Style.icon} />
                ごみ箱
            </Button>
        </div>
    );
}
