import { staticRoutes } from '#shared/site'
import { services } from '../data/services'
import { caseStudies } from '../data/case-studies'

export default defineEventHandler((event) => {
  const { siteUrl } = useRuntimeConfig(event).public

  const paths = [
    ...staticRoutes,
    ...services.map(s => `/services/${s.slug}`),
    ...caseStudies.map(c => `/case-studies/${c.slug}`),
  ]

  const urls = paths
    .map(path => `  <url><loc>${new URL(path, siteUrl).href}</loc></url>`)
    .join('\n')

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
})
