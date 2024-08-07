'use client';
import Style from '@styles/componentsStyles/Index/IndexText.module.scss';
import { useIndexText } from '@/hooks/TextContent/useIndexText';
import LoadingContainer from '../Loading/LoadingContainer';

export default function IndexText() {
    const { text, isLoading } = useIndexText();

    const formatText = (text: string) => {
        return text.split('\n').map((line, index) => (
            <span key={index}>
                {line}
                <br />
            </span>
        ));
    };

    if (isLoading) {
        return <LoadingContainer />;
    }

    return (
        <>
            <h2 className={Style.leadText}>歴てくについて</h2>
            {text ? (
                <p className={Style.text}>{formatText(text.text)}</p>
            ) : (
                <p className={Style.text}>No text available</p>
            )}
        </>
    );
}
