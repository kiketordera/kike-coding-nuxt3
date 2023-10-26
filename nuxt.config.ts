import { ContactInformation } from './data_helper/contact'

export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true
  },

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@dargmuesli/nuxt-cookie-control', 'nuxt-gtag', 'nuxt-security'],
  runtimeConfig: {
    indexable: true,
    public: {
      GOOGLE_ANALYTICS_MEASUREMENTID: process.env.GOOGLE_ANALYTICS_MEASUREMENTID,
      siteUrl: ContactInformation.fullURL,
      siteName: ContactInformation.title,
      // eslint-disable-next-line max-len
      siteDescription: 'UX / UI designer and software engineer with a solid base in programming thanks to my studies and international experience',
      language: 'en-gb'
    },
  },

  plugins: [
    { src: '~/plugins/aos', mode: 'client', ssr: false }
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/main.scss", "@/assets/scss/variables.scss";'
        }
      }
    }
  },
  css: ['vuetify/lib/styles/main.sass'],

  build: {
    transpile: ['vuetify']
  },
    app: {
    head: {
      title: 'Kike Tordera',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
      style: [
        // This will change the bouncing color when you scroll.
        // Put the branding color of the project here.
        { children: 'body { background-color: #2D2A2A }' },
        { children: 'html, body { overflow-x: hidden; }' },
      ]
    },
  },
  // Cookie control with consent
  cookieControl: {
    barPosition: 'bottom-left',
    cookies: {
      necessary: [],
      optional: [
        {
          description: {
            // eslint-disable-next-line max-len
            en: 'These cookies gather information about how many people visit and use our website. Switching these off means we can\'t gather information to improve the experience.'
          },
          id: 'ga',
          name: {
            en: 'Analytics'
          },
          targetCookieIds: ['cookie_control_consent', 'cookie_control_enabled_cookies'],
        }
      ],
    },
    localeTexts: {
      en: {
        accept: 'Accept all',
        bannerDescription: 'This website uses cookies to improve your experience.',
        manageCookies: 'Manage cookies',
        save: 'Save preferences',
      },
    },
    isAcceptNecessaryButtonEnabled: false,
    // typed module options
  },
  gtag: {
    initialConsent: false,
    id: process.env.GOOGLE_ANALYTICS_MEASUREMENTID
  },
// End of Cookie control with consent

// SEO
extends: [
  'nuxt-seo-kit'
],
nitro: {
  preset: 'firebase',
  prerender: {
    crawlLinks: false,
    routes: [
      '/',
      '/about',
    ],
  },
  esbuild: {
    options: {
      target: 'esnext'
    }
  },
},

// End of SEO
security: {
  rateLimiter: {
    tokensPerInterval: 5,
    interval: 'hour',
  },
 headers: {
  crossOriginEmbedderPolicy: false,
  // contentSecurityPolicy: false,

  contentSecurityPolicy: false
 }

},
vue: {
  compilerOptions: {
    isCustomElement: tag => ['swiper-container', 'swiper-slide'].includes(tag),
  },
}
})
