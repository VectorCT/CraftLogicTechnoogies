// Static content for now. Swap for a CMS or database later
// without touching the front end — only these server routes change.
export const services: Service[] = [
  {
    slug: 'business-websites',
    title: 'Business Websites',
    summary: 'Fast, secure websites that explain what you do and turn visitors into enquiries.',
    description: [
      'Your website is often the first conversation a prospective client has with your business. It should explain what you do in plain language, load quickly on a phone and make it easy to get in touch.',
      'We build websites on the same engineering standards as our business systems: version-controlled, tested, hosted on Microsoft Azure and measured against Lighthouse targets before launch.',
    ],
    problems: [
      'Your current site is slow, outdated or hard to update',
      'Visitors can’t tell what you do or who you do it for',
      'Enquiries arrive by email with no tracking or follow-up',
      'You have no privacy policy or cookie consent (POPIA)',
    ],
    includes: [
      'Content structure and copy guidance',
      'Responsive design from 360px to large desktop',
      'Contact forms with spam protection and POPIA consent',
      'SEO basics: meta tags, sitemap and structured data',
      'Hosting, SSL and analytics behind cookie consent',
    ],
    outcomes: ['Clear positioning', 'Lead capture built in', 'Lighthouse 90+'],
    icon: 'globe',
  },
  {
    slug: 'custom-systems',
    title: 'Custom Business Systems',
    summary: 'Replace spreadsheets and manual admin with systems built around how your business works.',
    description: [
      'Spreadsheets are a good place to start, but they become a risk as you grow: duplicate capture, version conflicts and reports that take days to compile.',
      'We design and build web-based systems that match how your team actually works, such as job tracking, quoting, approvals, stock and client portals. Each one runs on Azure with Microsoft 365 sign-in and role-based access.',
    ],
    problems: [
      'The same data is captured in more than one place',
      'Nobody is sure which spreadsheet is the latest version',
      'Month-end reporting is a manual, multi-day exercise',
      'Key processes depend on one person knowing how it works',
    ],
    includes: [
      'Process mapping and requirements workshop',
      'System architecture and database design',
      'Web application with role-based access',
      'Microsoft 365 (Entra ID) single sign-on',
      'Data migration from existing spreadsheets',
      'Training and handover documentation',
    ],
    outcomes: ['Less manual capture', 'One source of truth', 'Role-based access'],
    icon: 'layers',
  },
  {
    slug: 'api-integration',
    title: 'API & Integration',
    summary: 'Connect your accounting, CRM and Microsoft 365 tools so data flows without re-typing.',
    description: [
      'Most businesses already pay for good tools. The problem is that they don’t talk to each other, so people become the integration layer, copying data between systems by hand.',
      'We build secure, monitored integrations between your existing platforms using their official APIs, with logging and alerts so you know when something needs attention.',
    ],
    problems: [
      'Staff re-type data from one system into another',
      'Invoices, orders or leads go missing between systems',
      'You can’t get a single view across your tools',
      'Existing integrations break silently',
    ],
    includes: [
      'Integration design and data mapping',
      'API development (REST) and webhooks',
      'Scheduled sync jobs on Azure',
      'Error handling, retries and alerting',
      'Audit logging of every data transfer',
    ],
    outcomes: ['Automated data sync', 'Fewer errors', 'Audit trail'],
    icon: 'plug',
  },
  {
    slug: 'ongoing-support',
    title: 'Ongoing Support',
    summary: 'Monitoring, updates and improvements after launch. We don’t disappear.',
    description: [
      'Software isn’t finished at launch. Security patches, platform updates and new business requirements all need attention.',
      'Our maintenance plans give you a predictable monthly cost for hosting, backups, security updates and development time, with a team that already knows your system.',
    ],
    problems: [
      'The developer who built your system is no longer available',
      'You don’t know if your backups actually work',
      'Security updates are applied late or not at all',
      'Small improvements wait months for attention',
    ],
    includes: [
      'Hosting and uptime monitoring',
      'Automated, tested backups',
      'Security and dependency updates',
      'Monthly health report',
      'Development hours for improvements (plan dependent)',
    ],
    outcomes: ['Security updates', 'Backups', 'Monthly reporting'],
    icon: 'shield',
  },
]
