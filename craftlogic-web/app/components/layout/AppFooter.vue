<script setup lang="ts">
import { mainNav, serviceNav, legalNav } from '~/constants/navigation'
import { site } from '#shared/site'

const consent = useConsentStore()
const { channels, socials } = useContactDetails()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-navy-800 bg-navy-950 py-14 text-sm">
    <BaseContainer class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div class="space-y-4">
        <AppLogo />
        <p class="text-grey-400">
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
              class="hover:text-white"
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
              class="text-grey-400 hover:text-white"
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
              class="text-grey-400 hover:text-white"
            >{{ item.label }}</NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="text-grey-400 hover:text-white"
            >Contact</NuxtLink>
          </li>
        </ul>
      </nav>

      <div>
        <h2 class="mb-3 text-sm font-semibold">
          Get in touch
        </h2>
        <ul class="space-y-2 text-grey-400">
          <li
            v-for="c in channels.filter(ch => ch.icon !== 'clock')"
            :key="c.label"
            class="flex items-center gap-2"
          >
            <BaseIcon
              :name="c.icon"
              class="size-4 shrink-0 text-teal-500"
            />
            <a
              v-if="c.href"
              :href="c.href"
              class="hover:text-white"
            >{{ c.value }}</a>
            <span v-else>{{ c.value }}</span>
          </li>
        </ul>
      </div>
    </BaseContainer>

    <BaseContainer class="mt-12 flex flex-col gap-3 border-t border-navy-800 pt-6 text-grey-400 sm:flex-row sm:items-center sm:justify-between">
      <p>© {{ year }} {{ site.name }}. All rights reserved.</p>
      <ul class="flex flex-wrap gap-x-6 gap-y-2">
        <li
          v-for="item in legalNav"
          :key="item.to"
        >
          <NuxtLink
            :to="item.to"
            class="hover:text-white"
          >{{ item.label }}</NuxtLink>
        </li>
        <li>
          <button
            type="button"
            class="hover:text-white"
            @click="consent.reset"
          >
            Cookie preferences
          </button>
        </li>
      </ul>
    </BaseContainer>
  </footer>
</template>
