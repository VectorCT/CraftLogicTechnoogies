<script setup lang="ts">
usePageSeo({
  title: 'Maintenance Plans',
  description: 'Monthly maintenance and support plans in ZAR: hosting, backups, security updates, monitoring and ongoing development.',
})

// TODO (T-204): confirm these commitments (term, hours roll-over, ownership) before launch.
const faqs = [
  {
    q: 'Can I get a plan for a system you didn’t build?',
    a: 'Usually, yes. We start with a short technical review so we understand the code, hosting and risks before we commit to looking after it.',
  },
  {
    q: 'What happens to unused development hours?',
    a: 'Hours are allocated monthly. We agree a small improvement backlog in advance so the time is put to good use.',
  },
  {
    q: 'Is there a minimum term?',
    a: 'Plans run month to month after an initial agreed term. You can move between plans as your needs change.',
  },
  {
    q: 'Who owns the code and data?',
    a: 'You do. Code lives in a repository you have access to and data stays in your Azure or Microsoft 365 tenant.',
  },
]
</script>

<template>
  <div>
    <PageHeader
      eyebrow="Maintenance plans"
      title="We don’t disappear after launch"
      intro="Predictable monthly plans to keep your systems secure, up to date and improving. Prices in ZAR."
    />
    <BaseSection>
      <PlanGrid />
    </BaseSection>
    <BaseSection
      title="Common questions"
      class="bg-navy-950"
    >
      <div class="max-w-3xl divide-y divide-navy-800 border-y border-navy-800">
        <details
          v-for="f in faqs"
          :key="f.q"
          class="group py-5"
        >
          <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-white">
            {{ f.q }}
            <span
              class="text-azure-400 transition-transform group-open:rotate-45"
              aria-hidden="true"
            >+</span>
          </summary>
          <p class="mt-3 text-grey-400">
            {{ f.a }}
          </p>
        </details>
      </div>
    </BaseSection>
    <CtaBand
      title="Not sure which plan fits?"
      body="We’ll recommend one based on how critical the system is to your day-to-day work."
      cta-label="Choose a plan"
      :cta-to="{ path: '/contact', query: { service: 'ongoing-support' } }"
    />
  </div>
</template>
