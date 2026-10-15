/**
 * Client UI state only. Server/remote data belongs in TanStack Query,
 * not Pinia — keep this store small.
 */
export const useUiStore = defineStore('ui', () => {
  const isMobileNavOpen = ref(false)

  function toggleMobileNav() {
    isMobileNavOpen.value = !isMobileNavOpen.value
  }

  function closeMobileNav() {
    isMobileNavOpen.value = false
  }

  return { isMobileNavOpen, toggleMobileNav, closeMobileNav }
})
