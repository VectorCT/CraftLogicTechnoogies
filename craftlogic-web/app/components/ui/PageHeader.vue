<script setup lang="ts">
/** Top-of-page header for inner pages. Renders the page's single <h1>. */
defineProps<{
  eyebrow?: string
  title: string
  intro?: string
}>()
</script>

<template>
  <section class="relative overflow-hidden border-b border-navy-800 pt-16 pb-12 md:pt-24 md:pb-16">
    <div
      class="bg-grid pointer-events-none absolute inset-0"
      aria-hidden="true"
    />
    <BaseContainer class="relative">
      <p
        v-if="eyebrow"
        class="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-500"
      >
        {{ eyebrow }}
      </p>
      <h1 class="max-w-3xl text-4xl leading-tight md:text-5xl">
        {{ title }}
      </h1>
      <p
        v-if="intro"
        class="mt-5 max-w-2xl text-lg text-grey-400"
      >
        {{ intro }}
      </p>
      <slot />
    </BaseContainer>
  </section>
</template>
