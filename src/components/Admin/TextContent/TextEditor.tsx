'use client';

import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Config from '@/lib/TextEditorConfig';
import useEditor from '@/hooks/useEditor';
import Style from '@styles/componentsStyles/Admin/Editor.module.scss';
import '@styles/componentsStyles/Admin/editorCustomStyles.scss';

function TextEditor({
    initialData,
    setEditorData,
    triggerSubmit,
}: {
    initialData: any;
    setEditorData: (data: any) => void;
    triggerSubmit: () => void;
}) {
    const { editor, isEditorReady } = useEditor({ ...Config, data: initialData });

    const handleSave = async () => {
        if (editor) {
            const savedData = await editor.save();
            setEditorData(savedData);
            triggerSubmit();
        }
    };

    return (
        <>
            <div id="editorjs" className={Style.editorContainer}></div>
            {!isEditorReady && (
                <div className={Style.spinnerContainer}>
                    <Spinner animation="border" variant="light" className={Style.spinner} />
                </div>
            )}
            <Button variant="success" className={Style.sendBtn} onClick={handleSave}>
                送信
            </Button>
        </>
    );
}

export default TextEditor;
