export const extractIdFromSlug = (slug: string) => {
    const parts = slug.split('-');
    const lastPart = parts.pop();
    if (lastPart) {
        return lastPart.replace('.html', '');
    }
    throw new Error('Invalid slug format');
};
