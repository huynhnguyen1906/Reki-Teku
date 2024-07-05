'use client';
import React, { useEffect, useRef } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Image from '@editorjs/image';

function Editor() {
    const editorInstance = useRef<EditorJS | null>(null);

    useEffect(() => {
        console.log('Initializing EditorJS...');

        const editor = new EditorJS({
            holder: 'editorjs',
            tools: {
                header: Header,
                list: List,
                image: Image,
            },
            onReady: () => {
                console.log('Editor.js is ready to work!');
            },
            onChange: async (api, event) => {
                const content: OutputData = await api.saver.save();
                console.log(content);
            },
        });

        editorInstance.current = editor;

        return () => {
            if (editorInstance.current) {
                editorInstance.current.isReady
                    .then(() => {
                        if (typeof editorInstance.current?.destroy === 'function') {
                            editor.destroy();
                            console.log('Editor instance destroyed');
                        } else {
                            console.error('Destroy method is not available on editorInstance.current');
                        }
                    })
                    .catch((error) => {
                        console.error('Error during destroy:', error);
                    });
            }
        };
    }, []);

    return <div id="editorjs" style={{ border: '1px solid #ccc', minHeight: '300px' }} />;
}

export default Editor;
