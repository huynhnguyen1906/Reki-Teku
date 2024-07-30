'use client';
import { useEffect } from 'react';
import React from 'react';
import MainLayout from '@/components/MainLayout';
import Accordion from 'react-bootstrap/Accordion';
import Style from '@styles/appStyles/Question.module.scss';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useQuestions } from '@/hooks/TextContent/useQuestions';
import { Question } from '@/types/Question';

export default function QuestionPage() {
    const { questions, isLoading } = useQuestions();

    useEffect(() => {
        const updateBackground = () => {
            if (window.matchMedia('(max-width: 600px)').matches) {
                document.body.style.backgroundImage = 'url(/images/bg-cloud.svg)';
                document.body.style.backgroundSize = 'contain';
            } else {
                document.body.style.backgroundImage = 'url(/images/bg-cloud.svg)';
                document.body.style.backgroundSize = 'cover';
            }
        };

        updateBackground();

        window.addEventListener('resize', updateBackground);

        return () => {
            window.removeEventListener('resize', updateBackground);
            document.body.style.backgroundImage = 'url(/images/bg.svg)';
        };
    }, []);

    if (isLoading) return null;

    return (
        <MainLayout>
            <div className={Style.container}>
                <h2 className={Style.contentTtl}>よくある質問</h2>

                <Accordion defaultActiveKey={null}>
                    {questions.map((item: Question, index: number) => (
                        <div className={Style.body} key={index}>
                            <Accordion.Item eventKey={index.toString()}>
                                <Accordion.Header>{item.question}</Accordion.Header>
                                <Accordion.Body className={Style.text}>
                                    {item.answer.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    ))}
                </Accordion>
                <div className={Style.inquiry}>
                    <p>
                        上記にない質問やご不明点がある場合は、公式LINEアカウントにてお気軽にお問い合わせください。
                        <br />
                        お客様のご質問に迅速に対応いたします
                    </p>
                    <div className={Style.lineBtn}>
                        <Link href="#">お問い合わせはこちら</Link>
                        <FaExternalLinkAlt color="#fffdf7" />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
