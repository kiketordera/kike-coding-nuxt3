// types/nuxt-og-image.d.ts
declare module 'nuxt-og-image' {
    export function defineOgImageScreenshot(opts: {
      screenshot?: {
        mask?: string
        delay?: number
        width?: number
        height?: number
      }
      colorScheme?: 'light' | 'dark'
      ssr?: boolean
    }): void
  
    export function defineOgImage(opts: {
      runtime?: 'satori' | 'puppeteer'
      width?: number
      height?: number
    }): void
  }
  