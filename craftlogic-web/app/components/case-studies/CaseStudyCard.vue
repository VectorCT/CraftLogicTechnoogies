<script setup lang="ts">
defineProps<{ study: CaseStudy }>()
</script>

<template>
  <BaseCard class="flex flex-col">
    <div class="flex items-center gap-3">
      <p class="text-sm text-teal-500">
        {{ study.industry }}
      </p>
      <SampleBadge v-if="study.isSample" />
    </div>
    <h3 class="mt-2 text-xl">
      {{ study.title }}
    </h3>
    <p class="mt-3 text-grey-400">
      {{ study.summary }}
    </p>
    <CaseStudyMetrics
      class="mt-5"
      :metrics="study.metrics"
    />
    <NuxtLink
      :to="`/case-studies/${study.slug}`"
      class="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-azure-400 hover:text-white"
    >
      Read case study<span class="sr-only">: {{ study.title }}</span>
      <BaseIcon
        name="arrow-right"
        class="size-4"
      />
    </NuxtLink>
  </BaseCard>
</template>
