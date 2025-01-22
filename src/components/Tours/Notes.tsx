'use client';
import Style from '@styles/componentsStyles/Tours/Notes.module.scss';
import { useToursNotes } from '@/hooks/TextContent/useToursNotes';
import parse from 'html-react-parser';
import LoadingContainer from '../Loading/LoadingContainer';
import React from 'react';

export default function Notes() {
    const { content, isLoading } = useToursNotes();
    console.log(content);
    const renderContent = (content: any) => {
        if (!content || !content.data) return null;

        return content.data.blocks.map((block: any) => {
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
        <div className={Style.NotesContainer}>
            <>
                <h2 className="fs-1">注意事項</h2>
                {isLoading ? (
                    <div className="d-flex flex-column justify-content-start align-item-center  gap-4 w-100">
                        <LoadingContainer />
                    </div>
                ) : (
                    <div className="d-flex flex-column justify-content-start align-item-start  gap-4 w-100">
                        <> {content && renderContent(content)} </>
                    </div>
                )}
            </>
        </div>
    );
}
