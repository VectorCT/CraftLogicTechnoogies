<script setup lang="ts">
import { mainNav } from '~/constants/navigation'

const ui = useUiStore()
const route = useRoute()

// Close the mobile menu whenever the route changes, or on Escape
watch(() => route.path, ui.closeMobileNav)
useKeyStroke('Escape', ui.closeMobileNav)

const theme = useTheme()
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur">
    <BaseContainer class="flex h-16 items-center justify-between">
      <AppLogo />

      <nav
        class="ml-auto hidden items-center gap-7 lg:flex"
        aria-label="Main"
      >
        <NuxtLink
          v-for="item in mainNav"
          :key="item.to"
          :to="item.to"
          class="text-sm text-body hover:text-ink"
          active-class="text-ink! underline decoration-azure-500 decoration-2 underline-offset-8"
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

      <div class="flex items-center gap-1 lg:ml-4">
        <!-- Icon shows the theme you'll switch to; driven by CSS so prerendered HTML is theme-agnostic -->
        <button
          type="button"
          class="rounded p-2 text-body hover:text-ink"
          aria-label="Toggle light and dark theme"
          title="Toggle light and dark theme"
          @click="theme.toggle"
        >
          <BaseIcon
            name="sun"
            class="size-5 light:hidden"
          />
          <BaseIcon
            name="moon"
            class="hidden size-5 light:block"
          />
        </button>

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
      </div>
    </BaseContainer>

    <nav
      v-show="ui.isMobileNavOpen"
      id="mobile-nav"
      class="border-t border-line lg:hidden"
      aria-label="Mobile"
    >
      <BaseContainer class="flex flex-col gap-1 py-4">
        <NuxtLink
          v-for="item in mainNav"
          :key="item.to"
          :to="item.to"
          class="rounded px-2 py-3 hover:bg-surface-raised"
          active-class="text-ink bg-surface-raised"
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
