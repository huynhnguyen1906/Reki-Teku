export interface AdminNewsView {
    id: string;
    news_timestamp: any;
    news_data: any;
    news_type: string;
    header: {
        level: number;
        text: string;
    };
    text: {
        text: string;
    };
}
