import { useQuery } from '@tanstack/vue-query'
import { contentApi } from '~/lib/api/content'

export function useProcessSteps() {
  return withSsrPrefetch(
    useQuery({
      queryKey: queryKeys.process.all,
      queryFn: contentApi.getProcessSteps,
    }),
  )
}
