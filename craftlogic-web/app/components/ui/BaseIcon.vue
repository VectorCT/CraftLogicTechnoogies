<script setup lang="ts">
/** Inline stroke icons (24×24). Decorative by default; pass `label` to expose to screen readers. */
const props = defineProps<{
  name: IconName
  label?: string
}>()

const paths: Record<IconName, string[]> = {
  'globe': ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z', 'M3 12h18', 'M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z'],
  'layers': ['m12 3 9 5-9 5-9-5 9-5Z', 'm3 13 9 5 9-5', 'm3 17.5 9 5 9-5'],
  'plug': ['M9 3v5', 'M15 3v5', 'M6 8h12v3a6 6 0 0 1-12 0V8Z', 'M12 17v4'],
  'shield': ['M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z', 'm9 12 2 2 4-4'],
  'check': ['m5 12 5 5 9-10'],
  'arrow-right': ['M5 12h14', 'm13 6 6 6-6 6'],
  'mail': ['M3 6h18v12H3z', 'm3 7 9 6 9-6'],
  'chat': ['M4 5h16v11H8l-4 4V5Z', 'M8 10h8', 'M8 13h5'],
  'map-pin': ['M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z', 'M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'],
  'clock': ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z', 'M12 7v5l3 2'],
  'menu': ['M4 6h16', 'M4 12h16', 'M4 18h16'],
  'close': ['M6 6l12 12', 'M18 6 6 18'],
  'cloud': ['M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 9.5 4.3 4.3 0 0 0 7 18Z'],
  'database': ['M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3Z', 'M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6', 'M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3'],
  'lock': ['M5 11h14v10H5z', 'M8 11V7a4 4 0 0 1 8 0v4'],
  'copy': ['M8 8h12v12H8z', 'M16 8V4H4v12h4'],
  'chart': ['M4 20V4', 'M4 20h16', 'M8 16v-4', 'M12 16V8', 'M16 16v-6'],
  'users': ['M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M2 21v-1a6 6 0 0 1 12 0v1', 'M16 3.5a4 4 0 0 1 0 7', 'M22 21v-1a6 6 0 0 0-4-5.6'],
  'sun': ['M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M12 2v2', 'M12 20v2', 'm4.9 4.9 1.4 1.4', 'm17.7 17.7 1.4 1.4', 'M2 12h2', 'M20 12h2', 'm4.9 19.1 1.4-1.4', 'm17.7 6.3 1.4-1.4'],
  'moon': ['M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z'],
}
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    :role="props.label ? 'img' : undefined"
    :aria-label="props.label"
    :aria-hidden="props.label ? undefined : 'true'"
    focusable="false"
  >
    <path
      v-for="d in paths[props.name]"
      :key="d"
      :d="d"
    />
  </svg>
</template>
