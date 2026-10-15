<script setup lang="ts">
/** Standard loading / error wrapper for TanStack queries. */
defineProps<{
  isPending: boolean
  isError: boolean
}>()
</script>

<template>
  <p
    v-if="isPending"
    class="text-grey-400"
    aria-live="polite"
  >
    Loading…
  </p>
  <p
    v-else-if="isError"
    class="text-red-400"
    role="alert"
  >
    We couldn’t load this content. Please refresh the page.
  </p>
  <slot v-else />
</template>
