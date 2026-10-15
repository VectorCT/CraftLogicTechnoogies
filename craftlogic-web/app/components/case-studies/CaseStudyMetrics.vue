<script setup lang="ts">
defineProps<{ metrics: CaseStudyMetric[] }>()
</script>

<template>
  <dl class="grid grid-cols-2 gap-4">
    <div
      v-for="m in metrics"
      :key="m.label"
      class="rounded-md border border-line-strong bg-surface p-4"
    >
      <dt class="text-xs uppercase tracking-wider text-muted">
        {{ m.label }}
      </dt>
      <dd class="mt-1 font-heading text-xl font-bold text-ink">
        {{ m.value }}
      </dd>
    </div>
  </dl>
</template>
