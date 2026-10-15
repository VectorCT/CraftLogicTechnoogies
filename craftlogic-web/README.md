# CraftLogic Technologies — Website

Company website for CraftLogic Technologies. *Built on Logic. Crafted for Growth.*

**Stack:** Nuxt 4 · Vue 3 (Composition API, `<script setup>`) · TypeScript · Pinia · TanStack Query · Tailwind CSS v4 · Zod

## Getting started

```bash
cp .env.example .env
npm install        # .npmrc sets legacy-peer-deps (TanStack's optional Vue 2 peer)
npm run dev        # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with HMR |
| `npm run build` | Production build (`.output/`) |
| `npm run preview` | Preview the production build |
| `npm run lint` / `lint:fix` | ESLint (Nuxt config + stylistic) |
| `npm run typecheck` | `vue-tsc` type check |

## Configuration

All settings are environment variables (see `.env.example`):

| Variable | Purpose |
| --- | --- |
| `NUXT_PUBLIC_SITE_URL` | Canonical URL. **Set at build time**: it's baked into prerendered pages, `sitemap.xml` and `robots.txt`. |
| `NUXT_PUBLIC_CLARITY_ID` | Microsoft Clarity project. Loaded only after analytics consent. Blank = off. |
| `NUXT_CONTACT_INBOX` | Where contact-form enquiries are delivered. |
| `NUXT_MAIL_TENANT_ID` / `CLIENT_ID` / `CLIENT_SECRET` / `SENDER` | Microsoft Graph app registration (application permission `Mail.Send`, ideally scoped to the sender mailbox with an Exchange application access policy). Blank = enquiries accepted, only the reference is logged. |

Company details (email, WhatsApp, socials) live in `shared/site.ts`. Empty values are hidden.

## Deploying to Azure Static Web Apps

```bash
NITRO_PRESET=azure npm run build
```

See T-501 / T-502 in `../CRAFTLOGIC_PROJECT_PLAN.md`.

## Architecture

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the folder structure and the rules for where logic lives.
