'use client';
import { useState, useEffect } from 'react';
import AdminLayout from '../AdminLayout';
import Style from '@styles/appStyles/Admin/TextContent.module.scss';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useIndexText } from '@/hooks/TextContent/useIndexText';
import Spinner from 'react-bootstrap/esm/Spinner';

export default function IndexText() {
    const { text: fetchedText, isLoading, isError } = useIndexText();
    const [text, setText] = useState('');

    useEffect(() => {
        if (fetchedText && !isLoading && !isError) {
            setText(fetchedText.text);
        }
    }, [fetchedText, isLoading, isError]);

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/api/text-content/save-index-text', { text });
            if (response.status === 200) {
                toast.success('テキスト保存しました');
            } else {
                toast.error('エラー発生しました。');
            }
        } catch (error) {
            toast.error('エラー発生しました。');
        }
    };

    return (
        <>
            <AdminLayout>
                <div className={Style.TextForm}>
                    <h1 className={Style.title}>歴てくについて</h1>
                    <div className={Style.inputItem}>
                        <label>文章</label>
                        {isLoading ? (
                            <Spinner animation="border" />
                        ) : (
                            <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
                        )}
                    </div>
                </div>
                <Button variant="success" className={Style.submitBtn} onClick={handleSubmit}>
                    送信
                </Button>
            </AdminLayout>
        </>
    );
}
