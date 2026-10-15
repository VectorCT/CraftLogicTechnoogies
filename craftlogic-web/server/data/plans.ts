// Pricing TBC — see T-204 in CRAFTLOGIC_PROJECT_PLAN.md
export const maintenancePlans: MaintenancePlan[] = [
  {
    id: 'essential',
    name: 'Essential',
    summary: 'Keep your website or system secure and backed up.',
    priceZar: null,
    features: ['Hosting & SSL', 'Daily backups', 'Security updates', 'Uptime monitoring', 'Monthly report'],
  },
  {
    id: 'growth',
    name: 'Growth',
    summary: 'For systems that need regular improvements.',
    priceZar: null,
    highlighted: true,
    features: ['Everything in Essential', 'Development hours each month', 'Priority support', 'Quarterly backup restore test'],
  },
  {
    id: 'partner',
    name: 'Partner',
    summary: 'A long-term technology partner for core systems.',
    priceZar: null,
    features: ['Everything in Growth', 'Agreed SLA', 'Quarterly roadmap session', 'Architecture and security reviews'],
  },
]
