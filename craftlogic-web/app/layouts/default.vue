<template>
  <div class="flex min-h-screen flex-col">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-azure-600 focus:px-4 focus:py-2 focus:text-white"
    >Skip to content</a>
    <AppHeader />
    <main
      id="main"
      class="flex-1"
    >
      <slot />
    </main>
    <AppFooter />
    <CookieBanner />
  </div>
</template>
