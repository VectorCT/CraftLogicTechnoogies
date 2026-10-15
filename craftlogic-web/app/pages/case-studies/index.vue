<script setup lang="ts">
usePageSeo({
  title: 'Case Studies',
  description: 'How CraftLogic Technologies has helped South African businesses replace manual processes with secure, custom-built systems.',
})

const { data: studies, isPending, isError } = useCaseStudies()
</script>

<template>
  <div>
    <PageHeader
      eyebrow="Case studies"
      title="Real problems. Measurable results."
      intro="Each project starts with a specific business problem and ends with a result we can measure."
    />
    <BaseSection>
      <QueryState
        :is-pending="isPending"
        :is-error="isError"
      >
        <div class="grid gap-6 md:grid-cols-2">
          <CaseStudyCard
            v-for="study in studies"
            :key="study.slug"
            :study="study"
          />
        </div>
      </QueryState>
    </BaseSection>
    <CtaBand
      title="Have a similar problem?"
      body="Tell us about it. We’ll tell you honestly whether a custom system is the right answer."
      cta-label="Talk about your project"
    />
  </div>
</template>
