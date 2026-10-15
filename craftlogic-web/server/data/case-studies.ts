// SAMPLE content only — every entry is flagged `isSample` and renders a visible
// "Sample" badge. Replace with real (or anonymised, with permission) projects
// before launch (T-205). Do not publish sample metrics as real results.
export const caseStudies: CaseStudy[] = [
  {
    slug: 'sample-operations-system',
    title: 'Replacing spreadsheets with a job management system',
    industry: 'Logistics',
    summary: 'A field services team moved job tracking from shared spreadsheets to a single web system.',
    problem: 'Job tracking ran across several shared spreadsheets. Dispatchers captured the same job up to three times, updates were missed and month-end invoicing took days of reconciliation.',
    solution: 'A web-based job management system on Azure with Microsoft 365 sign-in, role-based access for dispatchers, technicians and finance, and an export to the accounting package.',
    results: [
      'Jobs captured once, at source',
      'Live job status visible to the whole team',
      'Month-end invoicing run from a single report',
    ],
    metrics: [
      { value: '3 days → 4 hrs', label: 'Month-end admin' },
      { value: '1', label: 'Source of truth' },
    ],
    stack: ['Azure App Service', '.NET', 'Azure SQL', 'Microsoft Entra ID'],
    isSample: true,
    featured: true,
  },
  {
    slug: 'sample-accounting-integration',
    title: 'Connecting online orders to accounting',
    industry: 'Retail & distribution',
    summary: 'Orders, invoices and stock levels synced automatically between an online store and accounting.',
    problem: 'Every online order was re-typed into the accounting system by hand. Errors in quantities and pricing led to stock discrepancies and credit notes.',
    solution: 'A monitored integration that pushes new orders to accounting as invoices, pulls stock levels back every 15 minutes and alerts the team when a transfer fails.',
    results: [
      'No manual re-capture of orders',
      'Stock levels accurate within 15 minutes',
      'Failed transfers flagged automatically',
    ],
    metrics: [
      { value: '0', label: 'Orders re-typed' },
      { value: '15 min', label: 'Stock sync interval' },
    ],
    stack: ['Azure Functions', 'REST APIs', 'Azure Service Bus'],
    isSample: true,
  },
]
