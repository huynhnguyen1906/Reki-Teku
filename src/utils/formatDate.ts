export const formatDate = (timestamp: { seconds: number; nanoseconds: number }): string => {
    const date = new Date(timestamp.seconds * 1000);
    const yyyy = date.getFullYear().toString();
    const mm = ('0' + (date.getMonth() + 1)).slice(-2);
    const dd = ('0' + date.getDate()).slice(-2);
    return `${yyyy}/${mm}/${dd}`;
};
