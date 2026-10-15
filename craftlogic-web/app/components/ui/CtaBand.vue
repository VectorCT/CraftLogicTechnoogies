<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

withDefaults(defineProps<{
  title: string
  body?: string
  ctaLabel?: string
  ctaTo?: RouteLocationRaw
}>(), {
  body: undefined,
  ctaLabel: 'Book a discovery call',
  ctaTo: '/contact',
})
</script>

<template>
  <section class="bg-azure-600 py-16">
    <BaseContainer class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
      <div class="max-w-2xl">
        <h2 class="text-3xl text-white">
          {{ title }}
        </h2>
        <p
          v-if="body"
          class="mt-2 text-white/90"
        >
          {{ body }}
        </p>
      </div>
      <BaseButton
        :to="ctaTo"
        variant="inverse"
      >
        {{ ctaLabel }}
      </BaseButton>
    </BaseContainer>
  </section>
</template>
