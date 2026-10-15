/**
 * Central query-key factory. Always build keys from here so
 * invalidation stays predictable, e.g.
 *   queryClient.invalidateQueries({ queryKey: queryKeys.services.all })
 */
export const queryKeys = {
  services: {
    all: ['services'] as const,
    detail: (slug: string) => ['services', slug] as const,
  },
  caseStudies: {
    all: ['case-studies'] as const,
    detail: (slug: string) => ['case-studies', slug] as const,
  },
  plans: {
    all: ['plans'] as const,
  },
  process: {
    all: ['process'] as const,
  },
}
