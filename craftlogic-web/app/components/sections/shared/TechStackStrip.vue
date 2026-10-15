<script setup lang="ts">
import { techStack } from '~/constants/tech-stack'
</script>

<template>
  <ul class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
    <li
      v-for="t in techStack"
      :key="t.name"
      class="rounded-lg border border-navy-700 bg-navy-800/60 p-4"
    >
      <BaseIcon
        :name="t.icon"
        class="size-5 text-teal-500"
      />
      <p class="mt-3 text-sm font-semibold text-white">
        {{ t.name }}
      </p>
      <p class="mt-1 text-xs text-grey-400">
        {{ t.role }}
      </p>
    </li>
  </ul>
</template>
