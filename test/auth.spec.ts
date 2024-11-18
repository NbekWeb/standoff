import { fileURLToPath } from 'node:url'
import { describe, expect, test } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'
import { randomUUID } from 'uncrypto'

describe('auth', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('../', import.meta.url)),
    nuxtConfig: {
      session: randomUUID(),
    },
    runner: 'vitest',
  })

  test('unauth returns an empty session', async () => {
    const res = await $fetch('/api/_auth/session')

    expect(res).toStrictEqual({})
  })

  test('logout', async () => {
    const res = await $fetch('/api/_auth/session', {
      method: 'DELETE',
    })

    expect(res).toStrictEqual({
      loggedOut: true,
    })

    const session = await $fetch('/api/_auth/session')
    expect(session).toStrictEqual({})
  })
})
