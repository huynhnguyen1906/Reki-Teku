'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from 'react-bootstrap/Spinner';
import Config from '@/lib/TextEditorConfig';
import useEditor from '@/hooks/useEditor';
import Style from '@styles/componentsStyles/Admin/Editor.module.scss';
import '@styles/componentsStyles/Admin/editorCustomStyles.scss';

function TextEditor() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const { editor, isEditorReady } = useEditor(Config);

    return (
        <>
            <div id="editorjs" className={Style.editorContainer}></div>
            {loading && (
                <div className={Style.spinnerContainer}>
                    <Spinner animation="border" variant="light" className={Style.spinner} />
                </div>
            )}
        </>
    );
}

export default TextEditor;
