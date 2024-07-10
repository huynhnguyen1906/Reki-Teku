'use client';

import { useEffect, useRef, useState } from 'react';
import EditorJS, { EditorConfig } from '@editorjs/editorjs';

const useEditor = (config: EditorConfig) => {
    const [isEditorReady, setIsEditorReady] = useState(false);
    const editorInstance = useRef<EditorJS | null>(null);

    useEffect(() => {
        if (!editorInstance.current) {
            editorInstance.current = new EditorJS({
                ...config,
                onReady: () => {
                    setIsEditorReady(true);
                    config.onReady?.();
                },
            });
        }

        return () => {
            if (editorInstance.current && editorInstance.current.destroy) {
                editorInstance.current.destroy();
                editorInstance.current = null;
            }
        };
    }, [config]);

    return {
        isEditorReady,
        editor: editorInstance.current,
    };
};

export default useEditor;
