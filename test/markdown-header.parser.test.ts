import {parseMarkdownHeaders} from '../src';
import assert from 'assert';

const document = `
---
title: 'this is a title'
description: 'this is a description'
tags:
    - hello world
    - markdown parse
votes: 10000
show_cover: true
---


This is markdown content.

# title

## subtitle

- [ ] check


`

describe('model-tool', () => {
    it('to TypeScript interface', (done) => {
        const result = parseMarkdownHeaders(document);
        console.log(result);
        assert(typeof result?.headers==='object','type of headers is object');
        assert(typeof result?.markdown==='string','type of markdown is string');
        done()
    });
});
