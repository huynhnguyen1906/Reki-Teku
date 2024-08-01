export const convertSlugText = (text: string) => {
    if (!text) return '';
    text = text.replace(/\s+/g, '-');
    text = text.replace(/[^\w\-一-龥ぁ-ゔァ-ヴーａ-ｚＡ-Ｚ０-９々〆〤]/g, '');
    return text;
};
