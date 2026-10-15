<script setup lang="ts">
defineProps<{ plan: MaintenancePlan & { priceLabel: string } }>()
</script>

<template>
  <BaseCard
    class="relative flex flex-col"
    :class="plan.highlighted ? 'ring-2 ring-azure-500' : ''"
  >
    <p
      v-if="plan.highlighted"
      class="absolute -top-3 left-6 rounded-full bg-azure-600 px-3 py-0.5 text-xs font-semibold text-white"
    >
      Most popular
    </p>
    <h3 class="text-xl">
      {{ plan.name }}
    </h3>
    <p class="mt-1 text-sm text-muted">
      {{ plan.summary }}
    </p>
    <p class="mt-4 text-2xl font-semibold text-ink">
      {{ plan.priceLabel }}<span
        v-if="plan.priceZar !== null"
        class="text-sm text-muted"
      > / month excl. VAT</span>
    </p>
    <ul class="mt-5 space-y-2 text-sm">
      <li
        v-for="feature in plan.features"
        :key="feature"
        class="flex gap-2"
      >
        <BaseIcon
          name="check"
          class="mt-0.5 size-4 shrink-0 text-accent"
        />{{ feature }}
      </li>
    </ul>
    <div class="mt-auto pt-8">
      <BaseButton
        :to="{ path: '/contact', query: { plan: plan.id } }"
        class="w-full"
        :variant="plan.highlighted ? 'primary' : 'secondary'"
      >
        Choose {{ plan.name }}
      </BaseButton>
    </div>
  </BaseCard>
</template>
