<script setup lang="ts">
/** `detailed` = vertical list with deliverables (Process page); default = 5-up strip (Home). */
withDefaults(defineProps<{ detailed?: boolean }>(), { detailed: false })

const { data: steps, isPending, isError } = useProcessSteps()
</script>

<template>
  <QueryState
    :is-pending="isPending"
    :is-error="isError"
  >
    <ol
      v-if="!detailed"
      class="grid gap-6 sm:grid-cols-2 md:grid-cols-5"
    >
      <li
        v-for="step in steps"
        :key="step.order"
        class="border-t-2 border-azure-600 pt-4"
      >
        <p class="font-mono text-sm text-accent">
          0{{ step.order }}
        </p>
        <h3 class="mt-1 text-lg">
          {{ step.title }}
        </h3>
        <p class="mt-2 text-sm text-muted">
          {{ step.description }}
        </p>
      </li>
    </ol>

    <ol
      v-else
      class="relative space-y-10 border-l border-line-strong pl-8 md:pl-12"
    >
      <li
        v-for="step in steps"
        :key="step.order"
        class="relative"
      >
        <span
          class="absolute top-0 -left-[calc(2rem+1.25rem)] flex size-10 items-center justify-center rounded-full border border-azure-600 bg-surface font-mono text-sm text-accent md:-left-[calc(3rem+1.25rem)]"
          aria-hidden="true"
        >0{{ step.order }}</span>
        <div class="grid gap-4 md:grid-cols-[1fr_1fr] md:gap-10">
          <div>
            <h2 class="text-2xl">
              <span class="sr-only">Step {{ step.order }}: </span>{{ step.title }}
            </h2>
            <p class="mt-2 text-muted">
              {{ step.description }}
            </p>
          </div>
          <div class="rounded-lg border border-line-strong bg-surface-raised p-5">
            <h3 class="text-sm font-semibold uppercase tracking-wider text-muted">
              You receive
            </h3>
            <ul class="mt-3 space-y-2 text-sm">
              <li
                v-for="d in step.deliverables"
                :key="d"
                class="flex gap-2"
              >
                <BaseIcon
                  name="check"
                  class="mt-0.5 size-4 shrink-0 text-accent"
                />{{ d }}
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ol>
  </QueryState>
</template>
