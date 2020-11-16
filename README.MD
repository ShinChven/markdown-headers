# Markdown Headers

Parse markdown document's yaml headers.

[![npm version](http://img.shields.io/npm/v/markdown-headers.svg)](https://npmjs.org/package/markdown-headers)

## install

```shell script
npm install markdown-headers
```

## Usage

### full example

```javascript
const {parseMarkdownHeaders} = require('markdown-headers');

// test example
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
// usage
const result = parseMarkdownHeaders(document);
```

### output

```text
{
  headers: {
    title: 'this is a title',
    description: 'this is a description',
    tags: [ 'hello world', 'markdown parse' ],
    votes: 10000,
    show_cover: true
  },
  markdown: 'This is markdown content.\n\n# title\n\n## subtitle\n\n- [ ] check'
}
```
