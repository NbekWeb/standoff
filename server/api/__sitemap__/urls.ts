import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrlInput } from '#sitemap/types'

export default defineSitemapEventHandler(async () => {
  return [] satisfies SitemapUrlInput[]
})
