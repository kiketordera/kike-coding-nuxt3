export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true
  },

  modules: ['@nuxtjs/tailwindcss'],

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
  }
})
