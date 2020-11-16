import jsYaml from 'js-yaml';

interface MarkdownWithHeader {
    headers?: object|string
    markdown?: string
}

export const parseMarkdownHeaders = (document: string): MarkdownWithHeader | undefined => {
    const parts = document.split('---');
    if (parts.length > 2) {
        const match = parts[1];
        // @ts-ignore
        const headers = jsYaml.safeLoad(match, 'utf-8');
        const index = document.indexOf(match) + match.length;
        // noinspection JSUnusedGlobalSymbols
        const markdown = document.substring(index + 3, document.length).trim();
        return { headers, markdown }
    }
}
