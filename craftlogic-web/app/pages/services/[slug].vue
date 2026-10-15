<script setup lang="ts">
const route = useRoute()
const { data: service, suspense } = useService(() => String(route.params.slug))

await suspense().catch(() => null)
if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: 'Service not found', fatal: true })
}

usePageSeo({
  title: () => service.value?.title ?? 'Service',
  description: () => service.value?.summary ?? '',
})
</script>

<template>
  <div v-if="service">
    <PageHeader
      eyebrow="Service"
      :title="service.title"
      :intro="service.summary"
    >
      <BaseButton
        :to="{ path: '/contact', query: { service: service.slug } }"
        class="mt-8"
      >
        Request a quote
      </BaseButton>
    </PageHeader>

    <BaseSection>
      <div class="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div class="space-y-4 text-lg text-body">
          <p
            v-for="para in service.description"
            :key="para"
          >
            {{ para }}
          </p>
        </div>
        <BaseCard>
          <h2 class="text-lg">
            Signs you need this
          </h2>
          <ul class="mt-4 space-y-3 text-sm text-body">
            <li
              v-for="p in service.problems"
              :key="p"
              class="flex gap-2"
            >
              <span
                class="mt-2 size-1.5 shrink-0 rounded-full bg-teal-500"
                aria-hidden="true"
              />{{ p }}
            </li>
          </ul>
        </BaseCard>
      </div>
    </BaseSection>

    <BaseSection
      title="What’s included"
      class="bg-surface-sunken"
    >
      <div class="grid gap-12 lg:grid-cols-2">
        <ul class="space-y-3">
          <li
            v-for="i in service.includes"
            :key="i"
            class="flex gap-3"
          >
            <BaseIcon
              name="check"
              class="mt-0.5 size-5 shrink-0 text-accent"
            />{{ i }}
          </li>
        </ul>
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-muted">
            Outcomes
          </h3>
          <ul class="mt-4 flex flex-wrap gap-3">
            <li
              v-for="o in service.outcomes"
              :key="o"
              class="rounded-full border border-line-strong bg-surface-raised px-4 py-1.5 text-sm text-ink"
            >
              {{ o }}
            </li>
          </ul>
          <p class="mt-8 text-muted">
            Every project follows our five-step process, from discovery to ongoing maintenance.
            <NuxtLink
              to="/process"
              class="text-link underline underline-offset-2 hover:text-ink"
            >See how we work</NuxtLink>.
          </p>
        </div>
      </div>
    </BaseSection>

    <CtaBand
      :title="`Talk to us about ${service.title.toLowerCase()}`"
      body="Share a short description of what you need. We’ll respond within one business day."
      cta-label="Request a quote"
      :cta-to="{ path: '/contact', query: { service: service.slug } }"
    />
  </div>
</template>
