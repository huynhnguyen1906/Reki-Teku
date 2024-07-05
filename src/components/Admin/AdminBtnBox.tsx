'use client';
import Style from '@styles/componentsStyles/Admin/AdminBtnBox.module.scss';
import Button from 'react-bootstrap/Button';
import { FaTrash } from 'react-icons/fa6';
import { FaRegPlusSquare } from 'react-icons/fa';
import { CreateUrl } from '@/types/CreateUrl';
import { useRouter } from 'next/navigation';
interface AdminBtnBoxProps {
    createUrl: CreateUrl;
}

export default function AdminBtnBox({ createUrl }: AdminBtnBoxProps) {
    const router = useRouter();

    const handleCreateLink = () => {
        router.push(createUrl.url);
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
            <Button variant="danger">
                <FaTrash className={Style.icon} />
                ごみ箱
            </Button>
        </div>
    );
}
