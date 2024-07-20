'use client';

import { useEffect, useState } from 'react';
import EditorJS, { EditorConfig } from '@editorjs/editorjs';

const useEditor = (config: EditorConfig) => {
    const [isEditorReady, setIsEditorReady] = useState(false);
    const [editorInstance, setEditorInstance] = useState<EditorJS | null>(null);

    useEffect(() => {
        if (!editorInstance) {
            const editor = new EditorJS({
                ...config,
                onReady: () => {
                    setIsEditorReady(true);
                    setEditorInstance(editor);
                    config.onReady?.();
                },
            });
        }

        return () => {
            if (editorInstance && editorInstance.destroy) {
                editorInstance.destroy();
                setEditorInstance(null);
            }
        };
    }, [config, editorInstance]);

    return {
        isEditorReady,
        editor: editorInstance,
    };
};

export default useEditor;
