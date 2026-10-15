import { useQuery } from '@tanstack/vue-query'
import { contentApi } from '~/lib/api/content'

export function useMaintenancePlans() {
  const query = withSsrPrefetch(
    useQuery({
      queryKey: queryKeys.plans.all,
      queryFn: contentApi.getPlans,
    }),
  )

  // Derived view-model: keep formatting logic out of components
  const plans = computed(() =>
    (query.data.value ?? []).map(plan => ({
      ...plan,
      priceLabel: formatZar(plan.priceZar),
    })),
  )

  return { ...query, plans }
}
