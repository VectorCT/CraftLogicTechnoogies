<script setup lang="ts">
const consent = useConsentStore()
</script>

<template>
  <ClientOnly>
    <div
      v-if="!consent.hasDecided"
      role="dialog"
      aria-label="Cookie consent"
      class="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-lg border border-line-strong bg-surface-raised p-5 shadow-xl"
    >
      <p class="text-sm">
        We use essential cookies to run this site and, with your permission, analytics cookies to improve it.
        See our <NuxtLink
          to="/privacy"
          class="underline"
        >Privacy Policy</NuxtLink>.
      </p>
      <div class="mt-4 flex gap-3">
        <BaseButton
          size="sm"
          @click="consent.accept"
        >
          Accept
        </BaseButton>
        <BaseButton
          size="sm"
          variant="secondary"
          @click="consent.reject"
        >
          Essential only
        </BaseButton>
      </div>
    </div>
  </ClientOnly>
</template>
