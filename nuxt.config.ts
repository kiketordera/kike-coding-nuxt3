export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true
  },

  modules: ['@nuxtjs/tailwindcss', '@dargmuesli/nuxt-cookie-control', 'nuxt-gtag',],
  runtimeConfig: {
    public: {
      GOOGLE_ANALYTICS_MEASUREMENTID: process.env.GOOGLE_ANALYTICS_MEASUREMENTID,

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
        // { children: 'html, body { overflow-x: hidden; }' },
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
})
