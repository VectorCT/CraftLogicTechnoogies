export type ConsentChoice = 'accepted' | 'rejected' | null

/** Cookie consent (POPIA). Persisted in a first-party cookie for 12 months. */
export const useConsentStore = defineStore('consent', () => {
  const cookie = useCookie<ConsentChoice>('cl_consent', {
    default: () => null,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })

  const choice = computed(() => cookie.value)
  const hasDecided = computed(() => cookie.value !== null)
  const analyticsAllowed = computed(() => cookie.value === 'accepted')

  function accept() {
    cookie.value = 'accepted'
  }

  function reject() {
    cookie.value = 'rejected'
  }

  /** Re-opens the banner so the visitor can change or withdraw consent. */
  function reset() {
    cookie.value = null
  }

  return { choice, hasDecided, analyticsAllowed, accept, reject, reset }
})
