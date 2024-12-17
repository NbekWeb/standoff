// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/test-utils/module',
    // '@nuxt/eslint',
    // '@nuxtjs/stylelint-module',
    'nuxt3-notifications',
    '@pinia/nuxt',
    '@nuxt/test-utils/module',
    'nuxt-typeorm',
    'nuxt-auth-utils',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
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
      cache: {
        type: 'ioredis',
        options: {
          host: process.env.REDIS_HOST,
          port: process.env.REDIS_PORT,
        },
        duration: 30000,
      },
    },

    redis: {
      ip: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT ?? '6379'),
      password: process.env.REDIS_PASSWORD,
    },

    rateLimit: {
      perTime: 10 * 1000,
      maxRequests: 25,
    },

    logger: {
      level: process.env.LOGGER_LEVEL || 'info',
      telegram: {
        chat: Number(process.env.LOGGER_TELEGRAM_CHAT),
      },
    },
    telegram: {
      token: process.env.TELEGRAM_TOKEN,
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
    plugins: [
      'plugins/socket',
    ],
    routeRules: {
      '/**/*.map': {
        headers: {
          'Cache-Control': 'no-store',
        },
        status: process.env.NODE_ENV === 'development' ? 200 : 403,
      },
    },
    esbuild: {
      options: {
        tsconfigRaw: {
          compilerOptions: {
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
          },
        },
      },
    },
    typescript: {
      tsConfig: {
        compilerOptions: {
          emitDecoratorMetadata: true,
          experimentalDecorators: true,
          strictPropertyInitialization: false,
        },
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
  // eslint: {
  //   config: {
  //     stylistic: true,
  //   },
  // },
  robots: {
    sitemap: [
      '/sitemap.xml',
    ],
    debug: false,
    credits: false,
    disallow: [
      '/auth',
    ],
  },
  sitemap: {
    sources: [
      '/api/__sitemap__/urls',
    ],
    exclude: [
      '/profile',
      '/auth',
    ],
    defaults: {
      lastmod: new Date().toISOString(),
      priority: 0.8,
      changefreq: 'weekly',
    },
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '20%' },
      { label: 'Priority', select: 'sitemap:priority', width: '12.5%' },
      { label: 'Change Frequency', select: 'sitemap:changefreq', width: '12.5%' },
      { label: 'Hreflangs', select: 'count(xhtml:link)', width: '5%' },
    ],
    xslTips: false,
    autoLastmod: true,
    autoI18n: true,
    credits: false,
    debug: false,
  },
})
