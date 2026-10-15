import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@pinia/nuxt', '@nuxt/eslint'],

  // Components are registered by file name only (no folder prefix),
  // so components/layout/AppHeader.vue is <AppHeader />. Keep names unique.
  components: [{ path: '~/components', pathPrefix: false }],

  // Auto-import composables from feature sub-folders and Pinia stores
  imports: {
    dirs: ['composables/**', 'stores'],
  },
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'en-ZA' },
      titleTemplate: '%s · CraftLogic Technologies',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0F172A' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  // Self-hosted variable fonts (T-106): bundled at build, no third-party requests.
  css: [
    '@fontsource-variable/montserrat/wght.css',
    '@fontsource-variable/inter/wght.css',
    '~/assets/css/main.css',
  ],

  runtimeConfig: {
    // Server-only (override with NUXT_CONTACT_INBOX, NUXT_MAIL_TENANT_ID etc.)
    contactInbox: '',
    mail: {
      tenantId: '',
      clientId: '',
      clientSecret: '',
      sender: '',
    },
    public: {
      siteUrl: 'http://localhost:3000',
      siteName: 'CraftLogic Technologies',
      clarityId: '',
    },
  },
  compatibilityDate: '2026-10-01',

  // Marketing pages are prerendered to static HTML (fast, cache-friendly).
  // /api/contact stays a server function. NUXT_PUBLIC_SITE_URL must be set at build time.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml', '/robots.txt'],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  typescript: {
    strict: true,
  },

  // Deployment target: set NITRO_PRESET=azure (Azure Static Web Apps) at build time — see README.

  eslint: {
    config: { stylistic: true },
  },
})
