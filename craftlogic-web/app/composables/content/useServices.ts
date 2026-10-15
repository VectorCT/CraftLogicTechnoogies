import { useQuery } from '@tanstack/vue-query'
import { contentApi } from '~/lib/api/content'

export function useServices() {
  return withSsrPrefetch(
    useQuery({
      queryKey: queryKeys.services.all,
      queryFn: contentApi.getServices,
    }),
  )
}

export function useService(slug: MaybeRefOrGetter<string>) {
  return withSsrPrefetch(
    useQuery({
      queryKey: computed(() => queryKeys.services.detail(toValue(slug))),
      queryFn: () => contentApi.getService(toValue(slug)),
      enabled: computed(() => !!toValue(slug)),
    }),
  )
}
