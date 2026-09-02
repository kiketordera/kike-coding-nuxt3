import { defineNuxtConfig } from "nuxt/config";
import { joinURL } from "ufo";
import type { NuxtPage } from "@nuxt/schema";
import { ContactInformation } from "./app/data_helper/contact";
import { availableLanguages } from "./app/composables/getI18n";


// Nuxt 4.5.x does not seed prerender routes from `routeRules` on a server preset:
// it reads `.prerender` straight off rou3's match objects (`{ data, params }`)
// instead of `match.data`, so the check is always undefined and only the routes
// listed explicitly in `nitro.prerender.routes` get prerendered. Collect the
// static pages ourselves and hand them to nitro. Remove once Nuxt fixes it.
const staticPageRoutes = new Set<string>();

function collectStaticRoutes(pages: NuxtPage[], base = "/"): void {
  for (const page of pages) {
    if (page.path.includes(":")) continue;
    const route = joinURL(base, page.path);
    staticPageRoutes.add(route);
    if (page.children?.length) collectStaticRoutes(page.children, route);
  }
}

export default defineNuxtConfig({
  hooks: {
    "pages:resolved": (pages) => {
      staticPageRoutes.clear();
      collectStaticRoutes(pages);
    },
    "nitro:build:before": (nitro) => {
      nitro.options.prerender.routes = [
        ...new Set([...nitro.options.prerender.routes, ...staticPageRoutes]),
      ];
    },
  },
  ssr: false, // Disable SSR for SPA mode
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  typescript: {
    strict: true,
    typeCheck: true,
    shim: false,
  },
  // Render SSG mode
  routeRules: {
    "/**": { prerender: true },
  },
  // Packages
  modules: [
    "@dargmuesli/nuxt-cookie-control",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "nuxt-aos",
    "@nuxt/eslint",
    // Analisis
    "nuxt-gtag",
    "@nuxtjs/seo",
    // Optimizations
    "@nuxt/image",
  ],
  build: {
    transpile: ["vuetify"],
  },
  // SCSS
  vite: {
    build: {
      rollupOptions: {
        output: {
          format: 'es',
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@/assets/scss/variables" as *;
          @use "@/assets/scss/base" as *;
          `,
        },
      },
    },
  },
  css: ["vuetify/lib/styles/main.sass", "@/assets/scss/main.scss" ],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      titleTemplate: "",
      style: [
        { innerHTML: "html, body { background-color: #131212; }" },
        { innerHTML: "html, body { overflow-x: hidden; }" },
      ],
    },
  },
   // Cookies
   cookieControl: {
    barPosition: "bottom-left",
    closeModalOnClickOutside: true,
    locales: availableLanguages as SharedLocale[],
    localeTexts: {
      en: {
        accept: "Accept",
        acceptAll: "Accept all",
        decline: "Decline",
        declineAll: "Decline all",
        bannerTitle: "Cookies Consent",
        save: "Save",
        close: "Close",
        manageCookies: "Customize",
        bannerDescription: "This website uses cookies to improve your experience",
      },
      de: {
        accept: "Akzeptieren",
        acceptAll: "Alle akzeptieren",
        decline: "Ablehnen",
        declineAll: "Alle ablehnen",
        bannerTitle: "Cookie-Einwilligung",
        save: "Speichern",
        close: "Schließen",
        manageCookies: "Anpassen",
        bannerDescription: "Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern",
      },
      nl: {
        accept: "Accepteren",
        acceptAll: "Alles accepteren",
        decline: "Weigeren",
        declineAll: "Alles weigeren",
        bannerTitle: "Cookies Toestemming",
        save: "Opslaan",
        close: "Sluiten",
        manageCookies: "Aanpassen",
        bannerDescription: "Deze website gebruikt cookies om uw ervaring te verbeteren",
      },
      es: {
        accept: "Aceptar",
        acceptAll: "Aceptar todo",
        decline: "Rechazar",
        declineAll: "Rechazar todo",
        bannerTitle: "Consentimiento de Cookies",
        save: "Guardar",
        close: "Cerrar",
        manageCookies: "Personalizar",
        bannerDescription: "Este sitio web utiliza cookies para mejorar su experiencia",
      },
      fr: {
        accept: "Accepter",
        acceptAll: "Tout accepter",
        decline: "Refuser",
        declineAll: "Tout refuser",
        bannerTitle: "Consentement aux Cookies",
        save: "Enregistrer",
        close: "Fermer",
        manageCookies: "Personnaliser",
        bannerDescription: "Ce site utilise des cookies pour améliorer votre expérience",
      },
    },
    cookies: {
      necessary: [
        {
          id: 'ncc_f',
          isPreselected: true,
          name: {
            en: 'Functional',
            de: 'Funktional',
            nl: 'Functioneel',
            es: 'Funcional',
            fr: 'Fonctionnel',
          },
          description: {
            en: "These cookies are needed for the page to operate. They don't track you.",
            de: "Diese Cookies sind für den Betrieb der Seite erforderlich. Sie verfolgen Sie nicht.",
            nl: "Deze cookies zijn nodig voor de werking van de pagina. Ze volgen u niet.",
            es: "Estas cookies son necesarias para que la página funcione. No te rastrean.",
            fr: "Ces cookies sont nécessaires au bon fonctionnement de la page. Ils ne vous suivent pas.",
          },
          targetCookieIds: ['ncc_f'],
        },
      ],
      optional: [
        {
          id: `${ContactInformation.title}-Analytics`,
          name: {
            en: 'Analytics',
            de: 'Analyse',
            nl: 'Analytische gegevens',
            es: 'Analítica',
            fr: 'Analyse',
          },
          description: {
            en: "These cookies gather information about how many people visit and use our website. Switching these off means we can't gather information to improve the experience.",
            de: "Diese Cookies sammeln Informationen darüber, wie viele Personen unsere Website besuchen und nutzen. Wenn Sie diese ausschalten, können wir keine Informationen sammeln, um die Erfahrung zu verbessern.",
            nl: "Deze cookies verzamelen informatie over hoeveel mensen onze website bezoeken en gebruiken. Als u deze uitschakelt, kunnen we geen informatie verzamelen om de ervaring te verbeteren.",
            es: "Estas cookies recopilan información sobre cuántas personas visitan y utilizan nuestro sitio web. Desactivarlas significa que no podemos recopilar información para mejorar la experiencia.",
            fr: "Ces cookies recueillent des informations sur le nombre de personnes qui visitent et utilisent notre site Web. Les désactiver signifie que nous ne pouvons pas recueillir d'informations pour améliorer l'expérience.",
          },
          links: {
            "https://kike.me/legal/cookies-policy": 'Cookies Policy',
          },
        }
      ],
    },
  },
  // SEO
  gtag: {
    id: process.env.GOOGLE_ANALYTICS_MEASUREMENTID,
  },
  ogImage: {
    defaults: {
      extension: "jpeg",
    },
  },
  site: {
    siteUrl: ContactInformation.fullURL,
  },
  runtimeConfig: {
    public: {
      site: {
        url: ContactInformation.fullURL,
        name: ContactInformation.title,
        description: ContactInformation.description,
        indexable: true,
      },
      siteUrl: ContactInformation.fullURL,
    },
  },
  schemaOrg: {
    identity: {
      type: "Person",
      name: ContactInformation.title,
      givenName: "Kike Tordera",
      jobTitle: "Mobile Developer",
      url: ContactInformation.fullURL,
      contactPoint: {
        email: ContactInformation.email,
        telephone: `${ContactInformation.countryCode} ${ContactInformation.phoneNumber}`,
      },
      logo: `${ContactInformation.fullURL}logo.jpeg`,
      sameAs: [ContactInformation.linkedINURL],
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) =>
        ["swiper-slide", "swiper-container"].includes(tag),
    },
  },
  // i18n
  i18n: {
    strategy: "no_prefix",
    baseUrl: ContactInformation.fullURL,
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      fallbackLocale: "en",
      redirectOn: "root",
      alwaysRedirect: false,
    },
    locales: [
      {
        code: "es",
        language: "es-ES",
        name: "Español (España)",
        files: ["es-ES.json", "./legal/cookies-policy/es-ES.json", "./legal/privacy-policy/es-ES.json", "./general/es-ES.json", "./vv/vv-es-ES.json",],  
      },
      {
        code: "en",
        language: "en-US",
        name: "English (US)",
        files: ["en-US.json", "./legal/cookies-policy/en-US.json", "./legal/privacy-policy/en-US.json", "./general/en-US.json", "./vv/vv-en-US.json",],  
      },
      {
        code: "fr",
        name: "French (France)",
        language: "fr-FR",
        files: ["fr-FR.json", "./legal/cookies-policy/fr-FR.json", "./legal/privacy-policy/fr-FR.json", "./general/fr-FR.json", "./vv/vv-fr-FR.json",],
      },
      {
        code: "de",
        name: "German (Germany)",
        language: "de-DE",
        files: ["de-DE.json", "./legal/cookies-policy/de-DE.json", "./legal/privacy-policy/de-DE.json", "./general/de-DE.json", "./vv/vv-de-DE.json",],
      },
    ],
  },
  // Deployment
  nitro: {
    prerender: {
      routes: ["/"],
    },
    preset: "firebase",
    firebase: {
      nodeVersion: "22",
      gen: 2,
      httpsOptions: {
      region: 'europe-west1',
      maxInstances: 3,
      },
    },
    serverAssets: [
      {
        baseName: "authkey",
        dir: "./authkey",
      },
    ],
  },
  compatibilityDate: "2024-11-02",
});
