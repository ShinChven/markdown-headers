interface MarkdownWithHeader {
    headers?: object | string;
    markdown?: string;
}
export declare const parseMarkdownHeaders: (document: string) => MarkdownWithHeader | undefined;
export {};
