import AdminLayout from '../AdminLayout';
import Style from '@styles/appStyles/Admin/TextContent.module.scss';
import Button from 'react-bootstrap/esm/Button';
import dynamic from 'next/dynamic';

const EditorComponent = dynamic(() => import('@/components/Admin/TextContent/TextEditor'), { ssr: false });

export default function TermsAndConditions() {
    return (
        <>
            <AdminLayout>
                <div className={Style.TextForm}>
                    <h1 className={Style.title}>旅行業約款</h1>
                </div>
                <EditorComponent />
                <Button variant="success" className={Style.submitBtn}>
                    送信
                </Button>
            </AdminLayout>
        </>
    );
}
