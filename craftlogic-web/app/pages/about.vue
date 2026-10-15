<script setup lang="ts">
usePageSeo({
  title: 'About',
  description: 'CraftLogic Technologies is a digital systems architect for South African SMEs. Engineering-first, Microsoft-based and built for the long term.',
})

const principles: { title: string, body: string }[] = [
  { title: 'Understand the business first', body: 'We map how work actually flows before proposing any technology. Sometimes the right answer is a smaller system than you expected.' },
  { title: 'Design before code', body: 'Architecture, data model and screens are agreed up front, so the build is predictable and the cost is clear.' },
  { title: 'Build it properly', body: 'Version control, automated tests, code reviews and documentation are standard on every project, not optional extras.' },
  { title: 'Stay accountable', body: 'We support what we build. Our maintenance plans exist because systems need care long after launch.' },
]

const fit = [
  'South African businesses with roughly 5 to 200 staff',
  'Core operations running on spreadsheets, email and manual processes',
  'Already on, or moving to, Microsoft 365 and Azure',
  'Owners, MDs, operations and finance leads who want a long-term technology partner',
]
</script>

<template>
  <div>
    <PageHeader
      eyebrow="About"
      title="A digital systems architect for growing businesses"
      intro="CraftLogic Technologies helps South African businesses replace manual processes with secure, custom-built software systems designed for long-term growth."
    />

    <BaseSection>
      <div class="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div class="prose-cl">
          <!-- TODO (T-206): add founder story / team section once confirmed -->
          <h2 class="mt-0!">
            Why engineering-first?
          </h2>
          <p>
            Many small business systems are built quickly and then left alone. They work until the business grows, a
            key person leaves or a platform update breaks something. By then, fixing them costs more than building them
            properly would have.
          </p>
          <p>
            We take the approach larger organisations expect: clear requirements, a deliberate architecture, secure
            hosting and proper documentation, sized and priced for SMEs.
          </p>
          <h2>
            Why Microsoft?
          </h2>
          <p>
            Most of our clients already run on Microsoft 365. Building on Azure means your staff sign in with the
            accounts they already have, your data stays in your own tenant and you benefit from enterprise-grade
            security without managing servers.
          </p>
        </div>
        <BaseCard>
          <h2 class="text-lg">
            Who we work with
          </h2>
          <ul class="mt-4 space-y-3 text-sm">
            <li
              v-for="f in fit"
              :key="f"
              class="flex gap-2"
            >
              <BaseIcon
                name="check"
                class="mt-0.5 size-4 shrink-0 text-teal-500"
              />{{ f }}
            </li>
          </ul>
        </BaseCard>
      </div>
    </BaseSection>

    <BaseSection
      eyebrow="How we work"
      title="Our principles"
      class="bg-navy-950"
    >
      <div class="grid gap-6 md:grid-cols-2">
        <BaseCard
          v-for="(p, i) in principles"
          :key="p.title"
        >
          <p class="font-mono text-sm text-teal-500">
            0{{ i + 1 }}
          </p>
          <h3 class="mt-1 text-lg">
            {{ p.title }}
          </h3>
          <p class="mt-2 text-sm text-grey-400">
            {{ p.body }}
          </p>
        </BaseCard>
      </div>
    </BaseSection>

    <BaseSection
      eyebrow="Technology"
      title="Our stack"
    >
      <TechStackStrip />
    </BaseSection>

    <CtaBand
      title="Let’s talk about your business"
      body="No obligation. We’ll tell you honestly whether we’re the right fit."
      cta-label="Get in touch"
    />
  </div>
</template>
