import { useQuery } from '@tanstack/vue-query'
import { contentApi } from '~/lib/api/content'

export function useCaseStudies() {
  return withSsrPrefetch(
    useQuery({
      queryKey: queryKeys.caseStudies.all,
      queryFn: contentApi.getCaseStudies,
    }),
  )
}

/** The case study highlighted on the home page: the one flagged `featured`, else the first. */
export function useFeaturedCaseStudy() {
  const query = useCaseStudies()
  const study = computed(() => {
    const studies = query.data.value ?? []
    return studies.find(s => s.featured) ?? studies[0]
  })
  return { ...query, study }
}

export function useCaseStudy(slug: MaybeRefOrGetter<string>) {
  return withSsrPrefetch(
    useQuery({
      queryKey: computed(() => queryKeys.caseStudies.detail(toValue(slug))),
      queryFn: () => contentApi.getCaseStudy(toValue(slug)),
      enabled: computed(() => !!toValue(slug)),
    }),
  )
}
