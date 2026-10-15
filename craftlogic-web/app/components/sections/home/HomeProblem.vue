<script setup lang="ts">
const problems: { icon: IconName, title: string, body: string }[] = [
  { icon: 'copy', title: 'Data captured twice', body: 'The same details typed into spreadsheets, email and accounting, with errors at every step.' },
  { icon: 'database', title: 'No single source of truth', body: 'Several versions of the same file, and nobody is sure which one is current.' },
  { icon: 'chart', title: 'Reports take days', body: 'Month-end means manually pulling numbers together from different places.' },
  { icon: 'users', title: 'Processes live in people’s heads', body: 'When a key person is on leave, work slows down or stops.' },
]
</script>

<template>
  <BaseSection
    eyebrow="The problem"
    title="Still running your business on spreadsheets?"
    intro="The tools that got you started don’t scale with you. As you grow, manual processes cost more time and carry more risk."
    class="border-y border-navy-800 bg-navy-950"
  >
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="p in problems"
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
      </div>
    </div>
  </BaseSection>
</template>
