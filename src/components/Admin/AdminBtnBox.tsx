import Style from '@styles/appStyles/Admin/AdminNewsView.module.scss';
import Button from 'react-bootstrap/Button';
import { FaTrash } from 'react-icons/fa6';
import { FaRegPlusSquare } from 'react-icons/fa';
export default function AdminBtnBox() {
    return (
        <div className={Style.btnBox}>
            <Button variant="success">
                <FaRegPlusSquare className={Style.icon} />
                記事追加
            </Button>
            <Button variant="danger">
                <FaTrash className={Style.icon} />
                ごみ箱
            </Button>
        </div>
    );
}
