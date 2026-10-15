export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'cl_theme'

/** Browser-bar colour per theme (matches --color-surface). */
const themeColors: Record<Theme, string> = { dark: '#0F172A', light: '#FFFFFF' }

/**
 * Inline <head> script: applies the saved (or OS-preferred) theme before first paint,
 * so prerendered pages don't flash dark → light. Kept tiny and dependency-free.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.dataset.theme=t}catch(e){}})()`

/**
 * Light/dark theme toggle. The source of truth is `<html data-theme>`, so markup
 * that depends on the theme should use the `light:` CSS variant rather than this
 * composable's state (pages are prerendered without knowing the visitor's theme).
 */
export function useTheme() {
  function current(): Theme {
    return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
  }

  function apply(theme: Theme) {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColors[theme])
  }

  function toggle() {
    const next: Theme = current() === 'light' ? 'dark' : 'light'
    apply(next)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    }
    catch {
      // Storage blocked (private mode etc.) — theme still applies for this page view.
    }
  }

  // Sync the browser-bar colour with the theme the head script picked.
  onMounted(() => apply(current()))

  return { toggle }
}
