declare module 'vite-svg-loader' {
  import { Plugin } from 'vite'
  function svgLoader(): Plugin
  export default svgLoader
}

declare module '*.svg' {
  const src: string
  export default src
}
