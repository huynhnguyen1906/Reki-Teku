'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../AdminLayout';
import Style from '@styles/appStyles/Admin/TextContent.module.scss';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useQuestions } from '@/hooks/TextContent/useQuestions';
import Spinner from 'react-bootstrap/esm/Spinner';

export default function FAQPage() {
    const { questions: initialQuestions, isLoading, isError } = useQuestions();
    const [questions, setQuestions] = useState([{ question: '', answer: '' }]);

    useEffect(() => {
        if (initialQuestions && !isLoading && !isError) {
            setQuestions(initialQuestions);
        }
    }, [initialQuestions, isLoading, isError]);

    const addQuestion = () => {
        setQuestions([...questions, { question: '', answer: '' }]);
    };

    const removeQuestion = (index: number) => {
        const newQuestions = questions.filter((_, i) => i !== index);
        setQuestions(newQuestions);
    };

    const handleQuestionChange = (index: number, value: string) => {
        const newQuestions = [...questions];
        newQuestions[index].question = value;
        setQuestions(newQuestions);
    };

    const handleAnswerChange = (index: number, value: string) => {
        const newQuestions = [...questions];
        newQuestions[index].answer = value;
        setQuestions(newQuestions);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/api/text-content/questions', { questions });
            if (response.status === 200) {
                toast.success('質問を保存しました。');
            } else {
                toast.error('保存中にエラーが発生しました。');
            }
        } catch (error) {
            toast.error('保存中にエラーが発生しました。');
        }
    };

    return (
        <AdminLayout>
            <div className={Style.TextForm}>
                <h1 className={Style.title}>よくある質問</h1>
                {isLoading ? (
                    <Spinner animation="border" />
                ) : (
                    questions.map((item, index) => (
                        <div key={index} className={Style.inputItem}>
                            <div className="d-flex gap-3">
                                <h2 className={Style.title}>質問 {index + 1}</h2>
                                <Button variant="danger" onClick={() => removeQuestion(index)} className="px-3">
                                    削除
                                </Button>
                            </div>
                            <label>質問</label>
                            <input
                                value={item.question}
                                onChange={(e) => handleQuestionChange(index, e.target.value)}
                            />
                            <label>回答</label>
                            <textarea value={item.answer} onChange={(e) => handleAnswerChange(index, e.target.value)} />
                        </div>
                    ))
                )}
                <Button variant="primary" onClick={addQuestion} className={Style.addBtn}>
                    質問を追加
                </Button>
                <Button variant="success" onClick={handleSubmit} className={Style.submitBtn}>
                    送信
                </Button>
            </div>
        </AdminLayout>
    );
}
