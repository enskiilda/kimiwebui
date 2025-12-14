export type Banner = {
        id: string;
        type: string;
        title?: string;
        content: string;
        url?: string;
        dismissible?: boolean;
        timestamp: number;
};

export enum TTS_RESPONSE_SPLIT {
        PUNCTUATION = 'punctuation',
        PARAGRAPHS = 'paragraphs',
        NONE = 'none'
}

export type ModelConfig = {
        id: string;
        name?: string;
        meta?: {
                profile_image_url?: string;
                description?: string;
                capabilities?: {
                        vision?: boolean;
                        usage?: boolean;
                        citations?: boolean;
                };
                tags?: { name: string }[];
                hidden?: boolean;
        };
        base_model_id?: string;
        params?: Record<string, any>;
};
