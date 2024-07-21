/**
 * @param {string} text
 * @returns {string}
 */
export const formatTextWithLineBreaks = (text: string): string => {
    return text.replace(/\n/g, '<br />');
};
