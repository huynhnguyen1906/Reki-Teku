'use client';

import Config from '@/lib/EditorConfig';
import useEditor from '@/hooks/useEditor';
import Style from '@styles/componentsStyles/Admin/Editor.module.scss';
import '@styles/componentsStyles/Admin/editorCustomStyles.scss';
function Editor() {
    const { editor, isEditorReady } = useEditor(Config);

    return <div id="editorjs" className={Style.editorContainer}></div>;
}

export default Editor;
