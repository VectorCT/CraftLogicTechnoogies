<script setup lang="ts">
const pillars: { icon: IconName, title: string, body: string }[] = [
  { icon: 'layers', title: 'Engineering-first', body: 'We architect before we build. Every system starts with a data model and an agreed design.' },
  { icon: 'chart', title: 'Built for scale', body: 'No shortcuts. No fragile systems. Tested, version-controlled and documented.' },
  { icon: 'users', title: 'Long-term partnership', body: 'We don’t disappear after launch. Maintenance plans keep your system healthy.' },
  { icon: 'cloud', title: 'Microsoft-based', body: 'Secure, enterprise-grade infrastructure on Azure and Microsoft 365.' },
]
</script>

<template>
  <BaseSection
    eyebrow="Why CraftLogic"
    title="Engineered properly, from day one"
  >
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <BaseCard
        v-for="p in pillars"
        :key="p.title"
      >
        <BaseIcon
          :name="p.icon"
          class="size-7 text-teal-500"
        />
        <h3 class="mt-4 text-lg">
          {{ p.title }}
        </h3>
        <p class="mt-2 text-sm text-grey-400">
          {{ p.body }}
        </p>
      </BaseCard>
    </div>
  </BaseSection>
</template>
