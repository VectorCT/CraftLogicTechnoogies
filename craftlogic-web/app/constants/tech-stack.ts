export interface TechItem {
  name: string
  role: string
  icon: IconName
}

/** Shown on Home (strip) and About. Text only: no third-party logos. */
export const techStack: TechItem[] = [
  { name: 'Microsoft Azure', role: 'Hosting & cloud services', icon: 'cloud' },
  { name: '.NET', role: 'Back-end services & APIs', icon: 'layers' },
  { name: 'Microsoft 365', role: 'Sign-in, email & documents', icon: 'users' },
  { name: 'SQL Server / Azure SQL', role: 'Reliable relational data', icon: 'database' },
  { name: 'Microsoft Entra ID', role: 'Identity & access control', icon: 'lock' },
  { name: 'TypeScript & Vue', role: 'Fast, accessible front ends', icon: 'globe' },
]
