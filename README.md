# next-plugin-svgr [![NPM version](https://img.shields.io/npm/v/@newhighsco/next-plugin-svgr.svg)](https://www.npmjs.com/package/@newhighsco/next-plugin-svgr)

[Next.js](https://nextjs.org/) plugin for for transforming SVGs into React components using [SVGR](https://react-svgr.com/)

## Installation

Install Next.js and `@newhighsco/next-plugin-svgr`:

```
npm install --save next @newhighsco/next-plugin-svgr
```

## Usage

Create a `next.config.js` in your project:

```js
// next.config.js
const withSvgr = require('@newhighsco/next-plugin-svgr')
module.exports = withSvgr({
  svgrOptions: {
    /* config options here */
  }
})
```

## Options

[See options supported by SVGR](https://react-svgr.com/docs/options/)

## [CHANGELOG](CHANGELOG.md)
