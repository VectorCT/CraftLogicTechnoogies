/**
 * Thin HTTP layer. All network calls go through here so base URL,
 * headers and error handling live in one place.
 * On the server, Nuxt's $fetch calls Nitro routes directly (no HTTP hop).
 */
export const apiClient = $fetch.create({
  baseURL: '/api',
  retry: 0,
})
