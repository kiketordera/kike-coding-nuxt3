import { defineNuxtConfig } from "nuxt/config";
import { ContactInformation } from "./app/data_helper/contact";

export default defineNuxtConfig({
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
    "**": { prerender: true },
  },
  // For the package `nuxt-delay-hydration`
  delayHydration: {
    debug: true,
    mode: "init",
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
    "nuxt-delay-hydration",
    "@nuxt/image",
    "@vite-pwa/nuxt",
  ],
  build: {
    transpile: ["vuetify"],
  },
  // SCSS
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: "modern",
        },
        scss: {
          api: "modern",
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
        { children: "html, body { background-color: black; }" },
        { children: "html, body { overflow-x: hidden; }" },
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
  // i18n
  i18n: {
    strategy: "no_prefix",
    baseUrl: ContactInformation.fullURL,
    lazy: true,
    locales: [
      {
        code: "es",
        language: "es-ES",
        name: "Español (España)",
        file: "es-ES.json",
      },
      {
        code: "en",
        language: "en-US",
        name: "English (US)",
        file: "en-US.json",
      },
      {
        code: "fr",
        name: "French (France)",
        language: "fr-FR",
        file: "fr-FR.json",
      },
      {
        code: "nl",
        name: "Dutch (Netherlands)",
        language: "nl-NL",
        file: "nl-NL.json",
      },
      {
        code: "de",
        name: "German (Germany)",
        language: "de-DE",
        file: "de-DE.json",
      },
      {
        code: "pt",
        name: "Portuguese (Portugal)",
        language: "pt-PT",
        file: "pt-PT.json",
      },
    ],
  },
  // Deployment
  nitro: {
    prerender: {
      routes: ["/"],
    },
    preset: "firebase",
    firebase: { nodeVersion: "18", gen: 1, region: "us-central1" },
    serverAssets: [
      {
        baseName: "authkey",
        dir: "./authkey",
      },
    ],
  },
  compatibilityDate: "2024-11-02",
});
