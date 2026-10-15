import { caseStudies } from '../../data/case-studies'

export default defineEventHandler((event): CaseStudy => {
  const slug = getRouterParam(event, 'slug')
  const study = caseStudies.find(c => c.slug === slug)
  if (!study) throw createError({ statusCode: 404, statusMessage: 'Case study not found' })
  return study
})
