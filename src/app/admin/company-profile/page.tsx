import AdminLayout from '../AdminLayout';
import Style from '@styles/appStyles/Admin/TextContent.module.scss';
import Button from 'react-bootstrap/esm/Button';

export default function CompanyProfile() {
    return (
        <>
            <AdminLayout>
                <div className={Style.TextForm}>
                    <h1 className={Style.title}>会社概要</h1>
                    <div className={Style.inputItem}>
                        <label>名称：</label>
                        <input></input>
                    </div>
                    <div className={Style.inputItem}>
                        <label>設立：</label>
                        <input></input>
                    </div>
                    <div className={Style.inputItem}>
                        <label>所在地：</label>
                        <textarea></textarea>
                    </div>
                    <div className={Style.inputItem}>
                        <label>取締役：</label>
                        <input></input>
                    </div>
                    <div className={Style.inputItem}>
                        <label>連絡先：</label>
                        <input></input>
                    </div>
                    <div className={Style.inputItem}>
                        <label>営業日：</label>
                        <input></input>
                    </div>
                    <div className={Style.inputItem}>
                        <label>資本金：</label>
                        <input></input>
                    </div>
                    <div className={Style.inputItem}>
                        <label>資格：</label>
                        <input></input>
                    </div>
                    <div className={Style.inputItem}>
                        <label>加盟団体：</label>
                        <input></input>
                    </div>
                    <div className={Style.inputItem}>
                        <label>メール：</label>
                        <input></input>
                    </div>
                    <div className={Style.inputItem}>
                        <label>国内旅行業務取扱管理者番号：</label>
                        <input></input>
                    </div>
                </div>
                <Button variant="success" className={Style.submitBtn}>
                    送信
                </Button>
            </AdminLayout>
        </>
    );
}
