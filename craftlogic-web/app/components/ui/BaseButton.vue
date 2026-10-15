<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(defineProps<{
  to?: RouteLocationRaw
  type?: 'button' | 'submit'
  /** `inverse` is for use on azure backgrounds (CTA band). */
  variant?: 'primary' | 'secondary' | 'inverse'
  size?: 'sm' | 'md'
  disabled?: boolean
}>(), {
  to: undefined,
  type: 'button',
  variant: 'primary',
  size: 'md',
  disabled: false,
})

const variants = {
  primary: 'bg-azure-600 text-white hover:bg-azure-500',
  secondary: 'border border-line-strong text-body hover:border-azure-500 hover:text-ink',
  inverse: 'bg-white text-navy-900 hover:bg-grey-200 focus-visible:outline-white',
}

const classes = computed(() => [
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60',
  props.size === 'sm' ? 'px-4 py-2 text-sm' : 'px-6 py-3',
  variants[props.variant],
])
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="classes"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="classes"
  >
    <slot />
  </button>
</template>
