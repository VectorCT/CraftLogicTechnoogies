export interface NavItem {
  label: string
  to: string
}

export const mainNav: NavItem[] = [
  { label: 'Services', to: '/services' },
  { label: 'Process', to: '/process' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Maintenance Plans', to: '/maintenance-plans' },
  { label: 'About', to: '/about' },
]

// Static on purpose: the footer must not depend on an API call.
export const serviceNav: NavItem[] = [
  { label: 'Business Websites', to: '/services/business-websites' },
  { label: 'Custom Business Systems', to: '/services/custom-systems' },
  { label: 'API & Integration', to: '/services/api-integration' },
  { label: 'Ongoing Support', to: '/services/ongoing-support' },
]

export const legalNav: NavItem[] = [
  { label: 'Privacy Policy', to: '/privacy' },
]
