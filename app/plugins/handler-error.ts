export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, _, info) => {
    $fetch('/api/handle/error', {
      params: {
        error: typeof error === 'object' ? JSON.stringify(error, Object.getOwnPropertyNames(error)) : error,
        source: 'errorHandler',
      },
    })
  }
})
