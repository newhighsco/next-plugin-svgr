# next-plugin-svgr [![NPM version](https://img.shields.io/npm/v/@newhighsco/next-plugin-svgr.svg)](https://www.npmjs.com/package/@newhighsco/next-plugin-svgr)

[Next.js](https://nextjs.org/) plugin for for transforming SVGs into React components using SVGR

## Installation

Install Next.js and `@newhighsco/next-plugin-svgr`:

```
npm install --save next @newhighsco/next-plugin-svgr
```

## Usage

Create a `next.config.js` in your project:

```js
// next.config.js
const withRobots = require('@newhighsco/next-plugin-robots')
module.exports = withRobots({
  robots: {
    /* config options here */
  }
})
```

## Options

|Name|Type|Default|
|-|-|-|
|`userAgent*`|`string`|`*`|
|`allowPaths?`|`array`|-|
|`disallowPaths?`|`array`|-|
|`filename?`|`string`|`robots.txt`|
|`sitemap?`|`object`|[See @newhighsco/next-plugin-sitemap options](https://github.com/newhighsco/next-plugin-sitemap#options)|

## [CHANGELOG](CHANGELOG.md)
