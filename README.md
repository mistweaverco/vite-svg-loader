# Vite SVG loader
Vite plugin to load raw SVG files.

```typescript
import UIIcons from './icons/sprite/icons.svg'
document.querySelector('default-ui-icons').innerHTML = UIIcons
```

## Install

### Install with yarn

```bash
yarn add -D @mistweaverco/vite-svg-loader
```

### Install with npm

```bash
npm install --save-dev @mistweaverco/vite-svg-loader
```

## Setup

### `vite.config.js`

```javascript
import svgLoader from '@mistweaverco/vite-svg-loader'

export default defineConfig({
  plugins: [svgLoader()]
})
```
