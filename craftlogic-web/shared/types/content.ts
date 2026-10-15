// Domain types shared by the Nuxt app and the Nitro server.
// Files in shared/types are auto-imported in both contexts.

export type ServiceSlug = 'business-websites' | 'custom-systems' | 'api-integration' | 'ongoing-support'

export type IconName
  = | 'globe' | 'layers' | 'plug' | 'shield' | 'check' | 'arrow-right' | 'mail' | 'chat'
    | 'map-pin' | 'clock' | 'menu' | 'close' | 'cloud' | 'database' | 'lock' | 'copy' | 'chart' | 'users'
    | 'sun' | 'moon'

export interface Service {
  slug: ServiceSlug
  title: string
  summary: string
  /** Longer intro for the detail page. One paragraph per entry. */
  description: string[]
  /** "Signs you need this": the problems this service solves. */
  problems: string[]
  /** What the engagement includes. */
  includes: string[]
  outcomes: string[]
  icon: IconName
}

export interface ProcessStep {
  order: number
  title: string
  description: string
  deliverables: string[]
}

export interface MaintenancePlan {
  id: 'essential' | 'growth' | 'partner'
  name: string
  summary: string
  /** Monthly price in ZAR. `null` until pricing is confirmed (T-204). */
  priceZar: number | null
  features: string[]
  highlighted?: boolean
}

export interface CaseStudyMetric {
  value: string
  label: string
}

export interface CaseStudy {
  slug: string
  title: string
  industry: string
  summary: string
  problem: string
  solution: string
  results: string[]
  metrics: CaseStudyMetric[]
  stack: string[]
  /** Placeholder content that must be replaced before launch (T-205). Renders a visible badge. */
  isSample?: boolean
  featured?: boolean
}

export interface ApiError {
  statusCode: number
  message: string
}
