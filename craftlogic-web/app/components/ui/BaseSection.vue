<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title?: string
  intro?: string
}>()
</script>

<template>
  <section class="py-16 md:py-24">
    <BaseContainer>
      <header
        v-if="title"
        class="mb-10 max-w-2xl"
      >
        <p
          v-if="eyebrow"
          class="mb-2 text-sm font-semibold uppercase tracking-wider text-teal-500"
        >
          {{ eyebrow }}
        </p>
        <h2 class="text-3xl md:text-4xl">
          {{ title }}
        </h2>
        <p
          v-if="intro"
          class="mt-4 text-grey-400"
        >
          {{ intro }}
        </p>
      </header>
      <slot />
    </BaseContainer>
  </section>
</template>
