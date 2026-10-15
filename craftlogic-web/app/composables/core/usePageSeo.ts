interface PageSeoOptions {
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  image?: string
}

/** Sets title, description, Open Graph and canonical URL for a page. */
export function usePageSeo({ title, description, image = '/og-image.png' }: PageSeoOptions) {
  const config = useRuntimeConfig()
  const route = useRoute()
  const canonical = computed(() => new URL(route.path, config.public.siteUrl).href)

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogUrl: canonical,
    ogImage: new URL(image, config.public.siteUrl).href,
    twitterCard: 'summary_large_image',
  })

  useHead({ link: [{ rel: 'canonical', href: canonical }] })
}
