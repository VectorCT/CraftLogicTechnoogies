<script setup lang="ts">
import { mainNav, serviceNav, legalNav } from '~/constants/navigation'
import { site } from '#shared/site'

const consent = useConsentStore()
const { channels, socials } = useContactDetails()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line bg-surface-sunken py-14 text-sm">
    <BaseContainer class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div class="space-y-4">
        <AppLogo />
        <p class="text-muted">
          {{ site.tagline }}
        </p>
        <ul
          v-if="socials.length"
          class="flex gap-4"
        >
          <li
            v-for="s in socials"
            :key="s.network"
          >
            <a
              :href="s.url"
              class="hover:text-ink"
              rel="noopener"
              target="_blank"
            >{{ s.label }}</a>
          </li>
        </ul>
      </div>

      <nav aria-labelledby="footer-services">
        <h2
          id="footer-services"
          class="mb-3 text-sm font-semibold"
        >
          Services
        </h2>
        <ul class="space-y-2">
          <li
            v-for="item in serviceNav"
            :key="item.to"
          >
            <NuxtLink
              :to="item.to"
              class="text-muted hover:text-ink"
            >{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <nav aria-labelledby="footer-company">
        <h2
          id="footer-company"
          class="mb-3 text-sm font-semibold"
        >
          Company
        </h2>
        <ul class="space-y-2">
          <li
            v-for="item in mainNav.filter(i => i.to !== '/services')"
            :key="item.to"
          >
            <NuxtLink
              :to="item.to"
              class="text-muted hover:text-ink"
            >{{ item.label }}</NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="text-muted hover:text-ink"
            >Contact</NuxtLink>
          </li>
        </ul>
      </nav>

      <div>
        <h2 class="mb-3 text-sm font-semibold">
          Get in touch
        </h2>
        <ul class="space-y-2 text-muted">
          <li
            v-for="c in channels.filter(ch => ch.icon !== 'clock')"
            :key="c.label"
            class="flex items-center gap-2"
          >
            <BaseIcon
              :name="c.icon"
              class="size-4 shrink-0 text-accent"
            />
            <a
              v-if="c.href"
              :href="c.href"
              class="hover:text-ink"
            >{{ c.value }}</a>
            <span v-else>{{ c.value }}</span>
          </li>
        </ul>
      </div>
    </BaseContainer>

    <BaseContainer class="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>© {{ year }} {{ site.name }}. All rights reserved.</p>
      <ul class="flex flex-wrap gap-x-6 gap-y-2">
        <li
          v-for="item in legalNav"
          :key="item.to"
        >
          <NuxtLink
            :to="item.to"
            class="hover:text-ink"
          >{{ item.label }}</NuxtLink>
        </li>
        <li>
          <button
            type="button"
            class="hover:text-ink"
            @click="consent.reset"
          >
            Cookie preferences
          </button>
        </li>
      </ul>
    </BaseContainer>
  </footer>
</template>
