# next-plugin-svgr [![NPM version](https://img.shields.io/npm/v/@newhighsco/next-plugin-svgr.svg)](https://www.npmjs.com/package/@newhighsco/next-plugin-svgr)

[Next.js](https://nextjs.org/) plugin for transforming SVGs into React components using [SVGR](https://react-svgr.com/)

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

In your code:

```jsx
import starUrl, { ReactComponent as Star } from './star.svg'

const App = () => (
  <>
    <img src={starUrl} alt="star" />
    <Star />
  </>
)
```

## With TypeScript

In your `next-env.d.ts` file (or in another type declaration file of your choosing that's within the `include` section of your `tsconfig.js`), simply add the following:

```tsx
declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  export const ReactComponent: FC<SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}
```

This notifies the compiler of the 2 possible ways you're able to import and use SVG files with this plugin integrated.

## Options

[See options supported by SVGR](https://react-svgr.com/docs/options/)

## [CHANGELOG](CHANGELOG.md)
