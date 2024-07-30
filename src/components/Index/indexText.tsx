'use client';
import Style from '@styles/componentsStyles/Index/IndexText.module.scss';
import { useIndexText } from '@/hooks/TextContent/useIndexText';

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

    if (isLoading) return null;

    return (
        <>
            <h2 className={Style.leadText}>歴てくについて</h2>
            <p className={Style.text}>{text && formatText(text.text)}</p>
        </>
    );
}
