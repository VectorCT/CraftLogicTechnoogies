import { services } from '../../data/services'

export default defineEventHandler((event): Service => {
  const slug = getRouterParam(event, 'slug')
  const service = services.find(s => s.slug === slug)
  if (!service) throw createError({ statusCode: 404, statusMessage: 'Service not found' })
  return service
})
