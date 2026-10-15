import { apiClient } from './client'

// Pure fetch functions — no Vue or query logic here.
export const contentApi = {
  getServices: () => apiClient<Service[]>('/services'),
  getService: (slug: string) => apiClient<Service>(`/services/${slug}`),
  getCaseStudies: () => apiClient<CaseStudy[]>('/case-studies'),
  getCaseStudy: (slug: string) => apiClient<CaseStudy>(`/case-studies/${slug}`),
  getPlans: () => apiClient<MaintenancePlan[]>('/plans'),
  getProcessSteps: () => apiClient<ProcessStep[]>('/process'),
}
