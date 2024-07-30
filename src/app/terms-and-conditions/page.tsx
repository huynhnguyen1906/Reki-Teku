'use client';
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
                default:
                    return null;
            }
        });
    };

    return (
        <MainLayout>
            {content && (
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
                        <h2 className="fs-1">旅行業約款</h2>
                        {renderContent(content.data)}
                    </div>
                </div>
            )}
        </MainLayout>
    );
}
