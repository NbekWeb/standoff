// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/stylelint-module',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
  ],
  devtools: {
    enabled: true,
  },
  css: ['~/assets/scss/main.scss'],
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  nitro: {
    experimental: {
      websocket: true,
    },
    routeRules: {
      '/**/*.map': {
        headers: {
          'Cache-Control': 'no-store',
        },
        status: process.env.NODE_ENV === 'development' ? 200 : 403,
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          additionalData: '@use "~/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
