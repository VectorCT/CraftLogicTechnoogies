<script setup lang="ts">
/**
 * Label + control + error, wired up for screen readers.
 * The slot receives `id`, `describedBy` and `invalid` to bind on the control.
 */
const props = defineProps<{
  label: string
  error?: string
  required?: boolean
  hint?: string
}>()

const id = useId()
const errorId = `${id}-error`
const hintId = `${id}-hint`

const describedBy = computed(() =>
  [props.hint ? hintId : null, props.error ? errorId : null].filter(Boolean).join(' ') || undefined,
)
</script>

<template>
  <div>
    <label
      :for="id"
      class="block text-sm font-medium text-ink"
    >
      {{ label }}<span
        v-if="required"
        class="text-muted"
      > (required)</span>
    </label>
    <p
      v-if="hint"
      :id="hintId"
      class="mt-0.5 text-xs text-muted"
    >
      {{ hint }}
    </p>
    <slot
      :id="id"
      :described-by="describedBy"
      :invalid="!!error"
    />
    <p
      v-if="error"
      :id="errorId"
      class="mt-1 text-sm text-danger"
    >
      {{ error }}
    </p>
  </div>
</template>
