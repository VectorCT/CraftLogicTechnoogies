import { site } from '#shared/site'

/** Adds schema.org Organization structured data (JSON-LD) to every page. Call once from app.vue. */
export function useOrganizationSchema() {
  const { siteUrl } = useRuntimeConfig().public

  const sameAs = Object.values(site.socials).filter(Boolean)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': site.name,
    'slogan': site.tagline,
    'description': site.description,
    'url': siteUrl,
    'logo': new URL('/favicon.svg', siteUrl).href,
    'email': site.email,
    'areaServed': { '@type': 'Country', 'name': 'South Africa' },
    ...(sameAs.length ? { sameAs } : {}),
  }

  useHead({
    script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }],
  })
}
