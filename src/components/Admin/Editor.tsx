'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from 'react-bootstrap/Spinner';
import Config, { resetFirstImageRendered } from '@/lib/EditorConfig';
import { handleSend } from '@/utils/handleSaveNews';
import { HandleSendParams } from '@/types/SaveNews';
import useEditor from '@/hooks/useEditor';
import Button from 'react-bootstrap/esm/Button';
import Style from '@styles/componentsStyles/Admin/Editor.module.scss';
import '@styles/componentsStyles/Admin/editorCustomStyles.scss';

function Editor() {
    const [activeButton, setActiveButton] = useState('ツアー追加');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        resetFirstImageRendered();
    }, [router]);

    const { editor, isEditorReady } = useEditor(Config);

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    const handleSendClick = () => {
        if (editor) {
            const params: HandleSendParams = { editor, activeButton, router };
            handleSend(params, setLoading);
        } else {
            console.error('Editor instance is not initialized');
        }
    };

    return (
        <>
            <div className={Style.tagSelectBox}>
                <p>記事のタッグ：</p>
                <div
                    className={`${Style.btnSelect} ${activeButton === 'ツアー追加' ? Style.active : ''}`}
                    onClick={() => handleButtonClick('ツアー追加')}
                >
                    <button>ツアー追加</button>
                </div>
                <div
                    className={`${Style.btnSelect} ${activeButton === 'ブログ更新' ? Style.active : ''}`}
                    onClick={() => handleButtonClick('ブログ更新')}
                >
                    <button>ブログ更新</button>
                </div>
            </div>
            <div id="editorjs" className={Style.editorContainer}></div>
            <Button variant="success" onClick={handleSendClick} className={Style.sendBtn}>
                送信
            </Button>
            {loading && (
                <div className={Style.spinnerContainer}>
                    <Spinner animation="border" variant="light" className={Style.spinner} />
                </div>
            )}
        </>
    );
}

export default Editor;
