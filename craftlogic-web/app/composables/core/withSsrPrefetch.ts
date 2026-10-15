/**
 * Registers a TanStack query for server-side prefetching so its data is
 * rendered into the HTML and hydrated on the client (see plugins/vue-query.ts).
 * Must be called during component setup (i.e. inside a composable used in setup).
 */
export function withSsrPrefetch<T extends { suspense: () => Promise<unknown> }>(query: T): T {
  onServerPrefetch(async () => {
    try {
      await query.suspense()
    }
    catch {
      // Errors are exposed via query.error; don't crash the SSR render.
    }
  })
  return query
}
