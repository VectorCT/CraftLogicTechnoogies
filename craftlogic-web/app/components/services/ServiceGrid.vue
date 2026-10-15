<script setup lang="ts">
/** `compact` = 4-up summary cards (Home); default = 2-up with outcomes (Services). */
const props = withDefaults(defineProps<{ compact?: boolean }>(), { compact: false })

const { data: services, isPending, isError } = useServices()
</script>

<template>
  <QueryState
    :is-pending="isPending"
    :is-error="isError"
  >
    <div
      class="grid gap-6"
      :class="props.compact ? 'sm:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2'"
    >
      <ServiceCard
        v-for="service in services"
        :key="service.slug"
        :service="service"
        :compact="props.compact"
      />
    </div>
  </QueryState>
</template>
