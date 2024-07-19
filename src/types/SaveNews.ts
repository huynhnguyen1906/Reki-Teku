export interface OutputData {
    time?: number;
    blocks: Array<{
        type: string;
        data: any;
    }>;
}

export interface HandleSendParams {
    documentId: string;
    editor: {
        save: () => Promise<OutputData>;
    };
    activeButton: string;
    router: {
        push: (url: string) => void;
    };
}
