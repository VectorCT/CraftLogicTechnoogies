import type { H3Event } from 'h3'

const hits = new Map<string, number[]>()

/**
 * Simple sliding-window rate limit, kept in memory per server instance.
 * Good enough to stop casual abuse of the contact form; for multi-instance
 * hosting put Azure Front Door / Cloudflare rate limiting in front as well.
 * The IP is only used as a map key and is never logged (POPIA).
 */
export function assertRateLimit(event: H3Event, { limit = 5, windowMs = 10 * 60_000 } = {}) {
  const key = getRequestIP(event, { xForwardedFor: true }) ?? 'unknown'
  const now = Date.now()
  const recent = (hits.get(key) ?? []).filter(t => now - t < windowMs)

  if (recent.length >= limit) {
    throw createError({ statusCode: 429, statusMessage: 'Too many requests. Please try again later.' })
  }

  recent.push(now)
  hits.set(key, recent)

  // Prevent unbounded growth
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (times.every(t => now - t >= windowMs)) hits.delete(k)
    }
  }
}
