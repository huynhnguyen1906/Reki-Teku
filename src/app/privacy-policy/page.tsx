'use client';
import MainLayout from '@/components/MainLayout';
import { usePrivacyPolicy } from '@/hooks/TextContent/usePrivacyPolicy';
import parse from 'html-react-parser';
import { useEffect } from 'react';
export default function PrivacyPolicy() {
    const { content } = usePrivacyPolicy();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const renderContent = (content: any) => {
        if (!content) return null;

        return content.blocks.map((block: any) => {
            switch (block.type) {
                case 'header':
                    const HeaderTag = `h${block.data.level}`;
                    return (
                        <HeaderTag key={block.id} {...block.data}>
                            {parse(block.data.text)}
                        </HeaderTag>
                    );
                case 'paragraph':
                    return <p key={block.id}>{parse(block.data.text)}</p>;
                default:
                    return null;
            }
        });
    };

    return (
        <MainLayout>
            <div className="w-100 h-auto overflow-auto">
                <div
                    className="textBlock d-flex flex-column justify-content-start align-item-start mx-auto gap-4"
                    style={{
                        width: 'calc(100% - 40px)',
                        maxWidth: '964px',
                        height: 'auto',
                        minHeight: '50vh',
                        marginTop: '70px',
                        borderRadius: '10px',
                    }}
                >
                    {content && (
                        <>
                            <h2 className="fs-1">プライバシーポリシー</h2>
                            {renderContent(content.data)}
                        </>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}
