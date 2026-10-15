/**
 * Microsoft Clarity, loaded only after the visitor accepts analytics cookies (POPIA, T-414).
 * Set NUXT_PUBLIC_CLARITY_ID to enable. If consent is withdrawn after loading,
 * the page reloads so the script and its cookies stop being used.
 */
export default defineNuxtPlugin(() => {
  const { clarityId } = useRuntimeConfig().public
  if (!clarityId) return

  const consent = useConsentStore()
  let loaded = false

  function loadClarity() {
    if (loaded) return
    loaded = true
    const w = window as typeof window & { clarity?: ((...args: unknown[]) => void) & { q?: unknown[] } }
    w.clarity ??= Object.assign((...args: unknown[]) => {
      (w.clarity!.q ??= []).push(args)
    }, {})
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.clarity.ms/tag/${encodeURIComponent(clarityId)}`
    document.head.appendChild(script)
  }

  watch(
    () => consent.analyticsAllowed,
    (allowed) => {
      if (allowed) loadClarity()
      else if (loaded) window.location.reload()
    },
    { immediate: true },
  )
})
