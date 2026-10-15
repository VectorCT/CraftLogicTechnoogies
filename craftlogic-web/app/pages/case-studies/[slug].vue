<script setup lang="ts">
const route = useRoute()
const { data: study, suspense } = useCaseStudy(() => String(route.params.slug))

await suspense().catch(() => null)
if (!study.value) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found', fatal: true })
}

usePageSeo({
  title: () => study.value?.title ?? 'Case Study',
  description: () => study.value?.summary ?? '',
})
</script>

<template>
  <div v-if="study">
    <PageHeader
      :eyebrow="study.industry"
      :title="study.title"
      :intro="study.summary"
    >
      <SampleBadge
        v-if="study.isSample"
        class="mt-6"
      />
    </PageHeader>

    <BaseSection>
      <div class="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div class="space-y-10">
          <div>
            <h2 class="text-2xl">
              The problem
            </h2>
            <p class="mt-3 text-body">
              {{ study.problem }}
            </p>
          </div>
          <div>
            <h2 class="text-2xl">
              The solution
            </h2>
            <p class="mt-3 text-body">
              {{ study.solution }}
            </p>
          </div>
          <div>
            <h2 class="text-2xl">
              The results
            </h2>
            <ul class="mt-3 space-y-2">
              <li
                v-for="r in study.results"
                :key="r"
                class="flex gap-2"
              >
                <BaseIcon
                  name="check"
                  class="mt-0.5 size-5 shrink-0 text-accent"
                />{{ r }}
              </li>
            </ul>
          </div>
        </div>

        <aside class="space-y-6">
          <CaseStudyMetrics :metrics="study.metrics" />
          <BaseCard>
            <h2 class="text-sm font-semibold uppercase tracking-wider text-muted">
              Technology
            </h2>
            <ul class="mt-3 flex flex-wrap gap-2">
              <li
                v-for="t in study.stack"
                :key="t"
                class="rounded-full border border-line-strong px-3 py-1 text-sm"
              >
                {{ t }}
              </li>
            </ul>
          </BaseCard>
        </aside>
      </div>

      <NuxtLink
        to="/case-studies"
        class="mt-12 inline-block text-sm text-link hover:text-ink"
      >
        ← All case studies
      </NuxtLink>
    </BaseSection>

    <CtaBand
      title="Have a similar problem?"
      body="Tell us about your project and we’ll respond within one business day."
      cta-label="Talk about your project"
    />
  </div>
</template>
