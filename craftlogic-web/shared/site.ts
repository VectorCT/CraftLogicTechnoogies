/**
 * Company details used across the app (footer, contact page, JSON-LD) and
 * the server (sitemap). Import via `#shared/site`.
 *
 * TODO (T-104 / T-109): replace placeholders once the domain, mailbox and
 * social handles are registered. Empty values are hidden in the UI.
 */
export const site = {
  name: 'CraftLogic Technologies',
  tagline: 'Built on Logic. Crafted for Growth.',
  description: 'CraftLogic Technologies builds secure, scalable digital systems for growing South African businesses.',
  email: 'hello@example.com',
  /** International format without "+" or spaces, e.g. 27820000000. */
  whatsapp: '',
  location: 'South Africa',
  responseTime: 'within one business day',
  socials: {
    linkedin: '',
    x: '',
    facebook: '',
    instagram: '',
  },
} as const

/** Static marketing routes, used by the sitemap. Dynamic routes are added from content data. */
export const staticRoutes = [
  '/',
  '/services',
  '/process',
  '/case-studies',
  '/maintenance-plans',
  '/about',
  '/contact',
  '/privacy',
] as const
