<script setup lang="ts">
defineProps<{ metrics: CaseStudyMetric[] }>()
</script>

<template>
  <dl class="grid grid-cols-2 gap-4">
    <div
      v-for="m in metrics"
      :key="m.label"
      class="rounded-md border border-navy-700 bg-navy-900 p-4"
    >
      <dt class="text-xs uppercase tracking-wider text-grey-400">
        {{ m.label }}
      </dt>
      <dd class="mt-1 font-heading text-xl font-bold text-white">
        {{ m.value }}
      </dd>
    </div>
  </dl>
</template>
