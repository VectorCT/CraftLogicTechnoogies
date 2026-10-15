<script setup lang="ts">
const { plans, isPending, isError } = useMaintenancePlans()
</script>

<template>
  <QueryState
    :is-pending="isPending"
    :is-error="isError"
  >
    <div class="grid gap-6 md:grid-cols-3">
      <PlanCard
        v-for="plan in plans"
        :key="plan.id"
        :plan="plan"
      />
    </div>
  </QueryState>
</template>
