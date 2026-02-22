// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-02-22',
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    'nuxt-gtag'
  ],
  gtag: {
    id: 'G-PEEEXTNHPD',
    initialConsent: false
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      title: 'Tortillas Kombat - The Steam Scroll',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  content: {
    // optional content configuration
  }
})
