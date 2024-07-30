'use client';
import Style from '@styles/componentsStyles/Index/IndexText.module.scss';
import { useIndexText } from '@/hooks/TextContent/useIndexText';

export default function IndexText() {
    const { text } = useIndexText();

    const formatText = (text: string) => {
        return text.split('\n').map((line, index) => (
            <span key={index}>
                {line}
                <br />
            </span>
        ));
    };

    return (
        <>
            {text && (
                <>
                    <h2 className={Style.leadText}>歴てくについて</h2>
                    <p className={Style.text}>{text && formatText(text.text)}</p>
                </>
            )}
        </>
    );
}
