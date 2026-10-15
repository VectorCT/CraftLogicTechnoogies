# Architecture

## Folder structure

```
craftlogic-web/
├── app/                          # Nuxt 4 source directory (~ / @ alias)
│   ├── app.vue                   # Root: layout + page outlet
│   ├── error.vue                 # 404 / error page
│   ├── assets/css/main.css       # Tailwind + brand tokens (@theme)
│   ├── components/               # Registered by file name (no folder prefix)
│   │   ├── layout/               # AppHeader, AppFooter, AppLogo, CookieBanner
│   │   ├── ui/                   # Generic building blocks: BaseButton, BaseCard, BaseSection, BaseIcon, PageHeader, CtaBand, FormField, QueryState…
│   │   ├── sections/home/        # Home sections (HomeHero, HeroDiagram, HomeProblem, HomePillars, HomeCaseStudy)
│   │   ├── sections/shared/      # Sections reused across pages (TechStackStrip)
│   │   ├── services/             # Feature components: ServiceCard, ServiceGrid
│   │   ├── plans/                # PlanCard, PlanGrid
│   │   ├── process/              # ProcessTimeline
│   │   ├── case-studies/         # CaseStudyCard, CaseStudyMetrics, SampleBadge
│   │   └── contact/              # ContactForm, ContactDetails
│   ├── composables/              # ALL logic lives here (auto-imported, incl. sub-folders)
│   │   ├── core/                 # Cross-cutting: withSsrPrefetch, usePageSeo, useOrganizationSchema, useContactDetails, useKeyStroke
│   │   ├── content/              # Query composables: useServices, useCaseStudies, useMaintenancePlans, useProcessSteps
│   │   └── forms/                # useContactForm (state + validation + mutation)
│   ├── constants/                # Static app config (navigation, tech-stack)
│   ├── layouts/default.vue
│   ├── lib/api/                  # Pure fetch functions (no Vue). client.ts + one file per domain
│   ├── pages/                    # File-based routes. Thin: call composables, render components
│   ├── plugins/                  # vue-query.ts (QueryClient + SSR hydrate), analytics.client.ts (Clarity after consent)
│   ├── stores/                   # Pinia setup stores — client UI state only
│   └── utils/                    # Pure helpers (auto-imported): queryKeys, formatZar
├── server/                       # Nitro back end
│   ├── api/                      # REST routes (/api/services, /api/contact …)
│   ├── routes/                   # sitemap.xml, robots.txt
│   ├── utils/                    # mailer (Microsoft Graph), rate-limit (auto-imported)
│   └── data/                     # Static content for now; swap for CMS/DB later
├── shared/                       # Code shared by app and server
│   ├── types/                    # Domain types (auto-imported in both)
│   ├── schemas/                  # Zod schemas (import via #shared/schemas/…)
│   └── site.ts                   # Company details + static routes (import via #shared/site)
├── public/                       # Static files (favicon)
└── docs/
```

## Data flow

```
Page / Component
   └─ composable (useServices)          ← logic, derived state, SSR prefetch
        └─ TanStack Query (useQuery)    ← caching, loading/error, dedupe
             └─ lib/api (contentApi)    ← pure $fetch calls
                  └─ server/api/*       ← Nitro route, validation
                       └─ server/data   ← content source
```

## Rules

1. **Components are dumb.** No `$fetch`, no business logic in `.vue` files. Call a composable and bind.
2. **Composition API only.** `<script setup lang="ts">` everywhere; Pinia stores use the setup syntax.
3. **Server state → TanStack Query. Client state → Pinia.**
   - Anything fetched from an API (services, plans, case studies) is a query or mutation.
   - Pinia holds UI-only state: mobile nav, cookie consent. Never copy query data into a store.
4. **Query keys come from `utils/query-keys.ts`.** Never hand-write a key array.
5. **SSR:** wrap read queries with `withSsrPrefetch()` so content renders into the HTML (SEO) and hydrates without a second request. Detail pages `await suspense()` and throw a 404 when data is missing.
6. **Validation is shared.** Zod schemas in `shared/schemas` are used by both the form composable and the server route.
7. **Types live in `shared/types`** and are auto-imported in app and server.
8. **Components are unique by file name** (`pathPrefix: false`), so name them clearly: `ServiceCard`, not `Card`.
9. **POPIA:** never log personal information on the server; analytics only after consent (`useConsentStore().analyticsAllowed`).

## Adding a feature (checklist)

1. Type → `shared/types/`
2. Server route → `server/api/<feature>/`
3. Fetch function → `app/lib/api/<feature>.ts`
4. Query key → `app/utils/query-keys.ts`
5. Composable → `app/composables/<area>/use<Feature>.ts`
6. Components → `app/components/<feature>/`
7. Page → `app/pages/`
