<script setup lang="ts">
useOrganizationSchema()

// Apply the visitor's theme before first paint (see useTheme).
useHead({
  script: [{ innerHTML: themeInitScript, tagPriority: 'critical' }],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
