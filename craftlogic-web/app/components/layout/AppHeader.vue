<script setup lang="ts">
import { mainNav } from '~/constants/navigation'

const ui = useUiStore()
const route = useRoute()

// Close the mobile menu whenever the route changes, or on Escape
watch(() => route.path, ui.closeMobileNav)
useKeyStroke('Escape', ui.closeMobileNav)
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-navy-800 bg-navy-900/90 backdrop-blur">
    <BaseContainer class="flex h-16 items-center justify-between">
      <AppLogo />

      <nav
        class="hidden items-center gap-7 lg:flex"
        aria-label="Main"
      >
        <NuxtLink
          v-for="item in mainNav"
          :key="item.to"
          :to="item.to"
          class="text-sm text-grey-200 hover:text-white"
          active-class="text-white! underline decoration-azure-500 decoration-2 underline-offset-8"
        >
          {{ item.label }}
        </NuxtLink>
        <BaseButton
          to="/contact"
          size="sm"
        >
          Book a discovery call
        </BaseButton>
      </nav>

      <button
        type="button"
        class="-mr-2 rounded p-2 lg:hidden"
        :aria-expanded="ui.isMobileNavOpen"
        aria-controls="mobile-nav"
        @click="ui.toggleMobileNav"
      >
        <span class="sr-only">{{ ui.isMobileNavOpen ? 'Close menu' : 'Open menu' }}</span>
        <BaseIcon
          :name="ui.isMobileNavOpen ? 'close' : 'menu'"
          class="size-6"
        />
      </button>
    </BaseContainer>

    <nav
      v-show="ui.isMobileNavOpen"
      id="mobile-nav"
      class="border-t border-navy-800 lg:hidden"
      aria-label="Mobile"
    >
      <BaseContainer class="flex flex-col gap-1 py-4">
        <NuxtLink
          v-for="item in mainNav"
          :key="item.to"
          :to="item.to"
          class="rounded px-2 py-3 hover:bg-navy-800"
          active-class="text-white bg-navy-800"
        >
          {{ item.label }}
        </NuxtLink>
        <BaseButton
          to="/contact"
          class="mt-3"
        >
          Book a discovery call
        </BaseButton>
      </BaseContainer>
    </nav>
  </header>
</template>
