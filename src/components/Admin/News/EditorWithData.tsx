'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from 'react-bootstrap/Spinner';
import Config, { resetFirstImageRendered } from '@/lib/EditorConfig';
import { handleUpdate } from '@/utils/handleUpdateNews';
import { HandleSendParams } from '@/types/SaveNews';
import useEditor from '@/hooks/useEditor';
import Button from 'react-bootstrap/esm/Button';
import Style from '@styles/componentsStyles/Admin/Editor.module.scss';
import '@styles/componentsStyles/Admin/editorCustomStyles.scss';

interface EditorWithDataProps {
    initialData: any;
    documentId: string;
}

function EditorWithData({ initialData, documentId }: EditorWithDataProps) {
    const [activeButton, setActiveButton] = useState(initialData.news_type || 'ツアー追加');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        resetFirstImageRendered();
    }, [router]);

    const { editor, isEditorReady } = useEditor({ ...Config, data: initialData });

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    const handleUpdateClick = () => {
        if (editor) {
            const params: HandleSendParams = { editor, activeButton, router };
            handleUpdate(params, setLoading, documentId);
        } else {
            console.error('Editor instance is not initialized');
        }
    };

    return (
        <>
            <div className={Style.tagSelectBox}>
                <p>記事のタグ：</p>
                <div
                    className={`${Style.btnSelect} ${activeButton === 'ツアー追加' ? Style.active : ''}`}
                    onClick={() => handleButtonClick('ツアー追加')}
                >
                    <div className={Style.tourAddTag}>ツアー追加</div>
                </div>
                <div
                    className={`${Style.btnSelect} ${activeButton === 'ブログ更新' ? Style.active : ''}`}
                    onClick={() => handleButtonClick('ブログ更新')}
                >
                    <div className={Style.blogAddTag}>ブログ更新</div>
                </div>
            </div>
            <div id="editorjs" className={Style.editorContainer}></div>
            <Button variant="success" onClick={handleUpdateClick} className={Style.sendBtn}>
                更新
            </Button>
            {loading && (
                <div className={Style.spinnerContainer}>
                    <Spinner animation="border" variant="light" className={Style.spinner} />
                </div>
            )}
        </>
    );
}

export default EditorWithData;
