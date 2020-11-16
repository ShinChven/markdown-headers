"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMarkdownHeaders = void 0;
const js_yaml_1 = __importDefault(require("js-yaml"));
exports.parseMarkdownHeaders = (document) => {
    const parts = document.split('---');
    if (parts.length > 2) {
        const match = parts[1];
        // @ts-ignore
        const headers = js_yaml_1.default.safeLoad(match, 'utf-8');
        const index = document.indexOf(match) + match.length;
        // noinspection JSUnusedGlobalSymbols
        const markdown = document.substring(index + 3, document.length).trim();
        return { headers, markdown };
    }
};
