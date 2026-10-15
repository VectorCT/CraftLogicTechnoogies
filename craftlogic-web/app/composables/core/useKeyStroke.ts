/** Calls `handler` when `key` is pressed anywhere on the page. Cleans up on unmount. */
export function useKeyStroke(key: string, handler: () => void) {
  const listener = (e: KeyboardEvent) => {
    if (e.key === key) handler()
  }
  onMounted(() => window.addEventListener('keydown', listener))
  onBeforeUnmount(() => window.removeEventListener('keydown', listener))
}
