'use client';
import { useState, useEffect } from 'react';
import AdminLayout from '../AdminLayout';
import Style from '@styles/appStyles/Admin/TextContent.module.scss';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAboutText } from '@/hooks/TextContent/useAboutText';
import Spinner from 'react-bootstrap/esm/Spinner';
import Image from 'next/image';
import { convertToWebP } from '@/utils/changeTypeImg';

export default function AboutText() {
    const { text: fetchedText, isLoading, isError } = useAboutText();
    const [leadText, setLeadText] = useState('');
    const [mainText, setMainText] = useState('');
    const [philosophyLeadText, setPhilosophyLeadText] = useState('');
    const [philosophyText, setPhilosophyText] = useState('');
    const [greetingText, setGreetingText] = useState('');
    const [image, setImage] = useState<string | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    useEffect(() => {
        if (fetchedText && !isLoading && !isError) {
            setLeadText(fetchedText.leadText || '');
            setMainText(fetchedText.mainText || '');
            setPhilosophyLeadText(fetchedText.philosophyLeadText || '');
            setPhilosophyText(fetchedText.philosophyText || '');
            setGreetingText(fetchedText.greetingText || '');
            setPreviewImage(fetchedText.image || '');
        }
    }, [fetchedText, isLoading, isError]);

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = async () => {
                if (reader.result) {
                    const webpDataUrl = await convertToWebP(reader.result as string);
                    setImage(webpDataUrl);
                    setPreviewImage(webpDataUrl);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/api/text-content/save-about-text', {
                leadText,
                mainText,
                philosophyLeadText,
                philosophyText,
                greetingText,
                image,
            });
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
                    {isLoading ? (
                        <Spinner animation="border"></Spinner>
                    ) : (
                        <>
                            <div className={Style.inputItem}>
                                <h1 className={Style.title}>歴てくについて</h1>
                                <label>リード文</label>
                                <input value={leadText} onChange={(e) => setLeadText(e.target.value)} />
                                <label>文章</label>
                                <textarea value={mainText} onChange={(e) => setMainText(e.target.value)}></textarea>
                            </div>
                            <div className={Style.inputItem}>
                                <h1 className={Style.title}>歴てくの理念</h1>
                                <label>リード文</label>
                                <input
                                    value={philosophyLeadText}
                                    onChange={(e) => setPhilosophyLeadText(e.target.value)}
                                />
                                <label>文章</label>
                                <textarea
                                    value={philosophyText}
                                    onChange={(e) => setPhilosophyText(e.target.value)}
                                ></textarea>
                            </div>
                            <div className={Style.inputItem}>
                                <h1 className={Style.title}>ごあいさつ</h1>
                                <label>文章</label>
                                <textarea
                                    value={greetingText}
                                    onChange={(e) => setGreetingText(e.target.value)}
                                ></textarea>
                                <Button variant="secondary" className={Style.AddImgBtn}>
                                    <label htmlFor="image-upload" style={{ cursor: 'pointer' }}>
                                        写真追加
                                    </label>
                                </Button>
                                <input
                                    id="image-upload"
                                    type="file"
                                    style={{ display: 'none' }}
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                                {previewImage && (
                                    <div className={Style.imageBox}>
                                        <div className={Style.imgItem}>
                                            <Image
                                                alt="Uploaded"
                                                src={previewImage}
                                                fill
                                                sizes="(max-width: 600px) 100vw, 600px"
                                                priority
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
                <Button variant="success" className={Style.submitBtn} onClick={handleSubmit}>
                    送信
                </Button>
            </AdminLayout>
        </>
    );
}
