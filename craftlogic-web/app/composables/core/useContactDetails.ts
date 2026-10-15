import { site } from '#shared/site'

export interface ContactChannel {
  icon: IconName
  label: string
  value: string
  href?: string
}

/** Contact channels for the footer and contact page. Unset values (empty strings) are omitted. */
export function useContactDetails() {
  const channels = computed<ContactChannel[]>(() => {
    const list: ContactChannel[] = [
      { icon: 'mail', label: 'Email', value: site.email, href: `mailto:${site.email}` },
    ]
    if (site.whatsapp) {
      list.push({ icon: 'chat', label: 'WhatsApp', value: formatSaPhone(site.whatsapp), href: `https://wa.me/${site.whatsapp}` })
    }
    list.push({ icon: 'map-pin', label: 'Location', value: site.location })
    list.push({ icon: 'clock', label: 'Response time', value: `We respond ${site.responseTime}` })
    return list
  })

  const socials = computed(() =>
    (Object.entries(site.socials) as [keyof typeof site.socials, string][])
      .filter(([, url]) => url)
      .map(([network, url]) => ({ network, url, label: socialLabels[network] })),
  )

  return { channels, socials, email: site.email }
}

const socialLabels: Record<keyof typeof site.socials, string> = {
  linkedin: 'LinkedIn',
  x: 'X',
  facebook: 'Facebook',
  instagram: 'Instagram',
}
