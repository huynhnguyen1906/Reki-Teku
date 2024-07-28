'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../AdminLayout';
import Style from '@styles/appStyles/Admin/TextContent.module.scss';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useTermsAndConditions } from '@/hooks/TextContent/useTermsAndConditions';
import dynamic from 'next/dynamic';
import Spinner from 'react-bootstrap/esm/Spinner';

const EditorComponent = dynamic(() => import('@/components/Admin/TextContent/TextEditor'), { ssr: false });

export default function TermsAndConditions() {
    const { content: initialData, isLoading, isError } = useTermsAndConditions();
    const [editorData, setEditorData] = useState(null);
    const [submitTriggered, setSubmitTriggered] = useState(false);
    useEffect(() => {
        if (initialData && !isLoading && !isError) {
            setEditorData(initialData.data);
        }
    }, [initialData, isLoading, isError]);

    useEffect(() => {
        if (submitTriggered && editorData) {
            const handleSubmit = async () => {
                try {
                    const response = await axios.post('/api/text-content/save-terms', { data: editorData });
                    if (response.status === 200) {
                        toast.success('テキスト保存しました');
                    } else {
                        toast.error('エラー発生しました。');
                    }
                } catch (error) {
                    toast.error('エラー発生しました。');
                }
            };
            handleSubmit();
            setSubmitTriggered(false);
        }
    }, [submitTriggered, editorData]);

    const triggerSubmit = () => {
        setSubmitTriggered(true);
    };
    return (
        <>
            <AdminLayout>
                <div className={Style.TextForm}>
                    <h1 className={Style.title}>旅行業約款</h1>
                </div>
                {isLoading ? (
                    <Spinner animation="border" />
                ) : (
                    <EditorComponent
                        initialData={editorData}
                        setEditorData={setEditorData}
                        triggerSubmit={triggerSubmit}
                    />
                )}
            </AdminLayout>
        </>
    );
}
