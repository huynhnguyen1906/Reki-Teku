export function splitText(text: string, limit: number): string {
    if (text.length <= limit) {
        return text;
    }
    return text.substring(0, limit) + '...';
}
