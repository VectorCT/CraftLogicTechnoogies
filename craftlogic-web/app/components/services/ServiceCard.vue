<script setup lang="ts">
withDefaults(defineProps<{ service: Service, compact?: boolean }>(), { compact: false })
</script>

<template>
  <BaseCard class="flex flex-col">
    <BaseIcon
      :name="service.icon"
      class="size-8 text-teal-500"
    />
    <h3 class="mt-4 text-xl">
      {{ service.title }}
    </h3>
    <p class="mt-3 text-grey-400">
      {{ service.summary }}
    </p>
    <ul
      v-if="!compact"
      class="mt-4 space-y-1 text-sm"
    >
      <li
        v-for="outcome in service.outcomes"
        :key="outcome"
        class="flex items-center gap-2"
      >
        <BaseIcon
          name="check"
          class="size-4 shrink-0 text-teal-500"
        />{{ outcome }}
      </li>
    </ul>
    <NuxtLink
      :to="`/services/${service.slug}`"
      class="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-azure-400 hover:text-white"
    >
      Learn more<span class="sr-only"> about {{ service.title }}</span>
      <BaseIcon
        name="arrow-right"
        class="size-4"
      />
    </NuxtLink>
  </BaseCard>
</template>
