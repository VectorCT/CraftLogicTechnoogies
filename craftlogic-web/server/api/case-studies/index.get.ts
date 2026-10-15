import { caseStudies } from '../../data/case-studies'

export default defineEventHandler((): CaseStudy[] => caseStudies)
