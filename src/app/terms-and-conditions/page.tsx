'use client';
import React from 'react';
import MainLayout from '@/components/MainLayout';
import { useTermsAndConditions } from '@/hooks/TextContent/useTermsAndConditions';
import parse from 'html-react-parser';

export default function TermsAndConditions() {
    const { content } = useTermsAndConditions();
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
                case 'list':
                    const listTag = block.data.style === 'ordered' ? 'ol' : 'ul';
                    return React.createElement(
                        listTag,
                        { key: block.id },
                        block.data.items.map((item: string, index: number) => <li key={index}>{parse(item)}</li>),
                    );
                case 'delimiter':
                    return (
                        <div
                            key={block.id}
                            style={{
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            <hr
                                style={{
                                    width: '100%',
                                    maxWidth: '600px',
                                    margin: '0 auto',
                                    border: 'none',
                                    borderTop: '3px solid #E8E8EB',
                                }}
                            />
                        </div>
                    );
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
                        minHeight: '100vh',
                        marginTop: '70px',
                        borderRadius: '10px',
                    }}
                >
                    {content && (
                        <>
                            {' '}
                            <h2 className="fs-1">旅行業約款</h2>
                            {renderContent(content.data)}
                        </>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}
