<script setup lang="ts">
const { study, isPending, isError } = useFeaturedCaseStudy()
</script>

<template>
  <BaseSection
    eyebrow="Proof"
    title="Real problems. Measurable results."
  >
    <QueryState
      :is-pending="isPending"
      :is-error="isError"
    >
      <div
        v-if="study"
        class="grid gap-8 rounded-xl border border-navy-700 bg-navy-800 p-6 md:p-10 lg:grid-cols-[1.4fr_1fr]"
      >
        <div>
          <div class="flex items-center gap-3">
            <p class="text-sm text-teal-500">
              {{ study.industry }}
            </p>
            <SampleBadge v-if="study.isSample" />
          </div>
          <h3 class="mt-2 text-2xl">
            {{ study.title }}
          </h3>
          <p class="mt-4 text-grey-400">
            {{ study.problem }}
          </p>
          <BaseButton
            :to="`/case-studies/${study.slug}`"
            variant="secondary"
            class="mt-6"
          >
            Read the case study
          </BaseButton>
        </div>
        <CaseStudyMetrics
          :metrics="study.metrics"
          class="content-start"
        />
      </div>
    </QueryState>
  </BaseSection>
</template>
