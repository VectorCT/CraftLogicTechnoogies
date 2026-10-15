<script setup lang="ts">
const { channels } = useContactDetails()

const nextSteps = [
  'We read your enquiry and reply within one business day.',
  'We book a 30-minute discovery call at a time that suits you.',
  'You receive a short summary and, if it’s a fit, a fixed-scope proposal.',
]
</script>

<template>
  <aside class="space-y-6">
    <BaseCard>
      <h2 class="text-lg">
        Contact details
      </h2>
      <dl class="mt-4 space-y-4 text-sm">
        <div
          v-for="c in channels"
          :key="c.label"
          class="flex gap-3"
        >
          <BaseIcon
            :name="c.icon"
            class="mt-0.5 size-5 shrink-0 text-accent"
          />
          <div>
            <dt class="text-muted">
              {{ c.label }}
            </dt>
            <dd class="text-ink">
              <a
                v-if="c.href"
                :href="c.href"
                class="hover:text-link"
              >{{ c.value }}</a>
              <span v-else>{{ c.value }}</span>
            </dd>
          </div>
        </div>
      </dl>
    </BaseCard>
    <BaseCard>
      <h2 class="text-lg">
        What happens next
      </h2>
      <ol class="mt-4 space-y-3 text-sm">
        <li
          v-for="(step, i) in nextSteps"
          :key="step"
          class="flex gap-3"
        >
          <span class="font-mono text-accent">0{{ i + 1 }}</span>
          <span class="text-body">{{ step }}</span>
        </li>
      </ol>
    </BaseCard>
  </aside>
</template>
