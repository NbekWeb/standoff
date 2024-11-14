// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/stylelint-module',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    'nuxt-typeorm',
    'nuxt-auth-utils',
  ],
  devtools: {
    enabled: process.env.NODE_ENV === 'development',
  },
  css: ['~/assets/scss/main.scss'],
  runtimeConfig: {
    tokenSecret: process.env.HASH_TOKEN,
    tokenExpiration: 60 * 60 * 24 * 30,

    typeorm: {
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT || '3306'),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
      logging: process.env.TYPEORM_LOGGING === 'true',
      type: 'mysql',
    },

    rateLimit: {
      perTime: 10 * 1000,
      maxRequests: 25,
    },

    public: {
      appVersion: '0.3.2',
    },
  },
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
