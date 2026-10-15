<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const is404 = computed(() => props.error.statusCode === 404)

useHead({
  title: is404.value ? 'Page not found' : 'Something went wrong',
  meta: [{ name: 'robots', content: 'noindex' }],
})
</script>

<template>
  <NuxtLayout>
    <PageHeader
      :eyebrow="String(error.statusCode)"
      :title="is404 ? 'We couldn’t find that page' : 'Something went wrong'"
      :intro="is404 ? 'The page may have moved or no longer exists.' : 'Please try again in a moment.'"
    >
      <div class="mt-8 flex flex-wrap gap-4">
        <BaseButton @click="clearError({ redirect: '/' })">
          Back to home
        </BaseButton>
        <BaseButton
          v-if="is404"
          variant="secondary"
          @click="clearError({ redirect: '/contact' })"
        >
          Contact us
        </BaseButton>
      </div>
    </PageHeader>
  </NuxtLayout>
</template>
