<script setup lang="ts">
usePageSeo({
  title: 'Custom Software & Business Systems',
  description: 'CraftLogic Technologies builds secure, scalable digital systems for growing South African businesses. Custom software, integrations and websites on Microsoft Azure.',
})
</script>

<template>
  <div>
    <HomeHero />
    <HomeProblem />
    <BaseSection
      eyebrow="Services"
      title="Replace spreadsheets with smart systems"
      intro="From your website to the systems that run your operations."
    >
      <ServiceGrid compact />
    </BaseSection>
    <HomePillars />
    <BaseSection
      eyebrow="Process"
      title="How we work"
      intro="Five clear steps, with defined deliverables at each one."
      class="bg-surface-sunken"
    >
      <ProcessTimeline />
      <BaseButton
        to="/process"
        variant="secondary"
        class="mt-10"
      >
        See the full process
      </BaseButton>
    </BaseSection>
    <HomeCaseStudy />
    <BaseSection
      eyebrow="Maintenance"
      title="Support that keeps your systems healthy"
      intro="Predictable monthly plans. We don’t disappear after launch."
      class="bg-surface-sunken"
    >
      <PlanGrid />
    </BaseSection>
    <BaseSection
      eyebrow="Technology"
      title="Built on the Microsoft platform"
      intro="Enterprise-grade tools, sized for growing businesses."
    >
      <TechStackStrip />
    </BaseSection>
    <CtaBand
      title="Let’s map out a system that fits how you work"
      body="A 30-minute discovery call. No obligation, no sales pitch: just a clear view of what’s possible."
    />
  </div>
</template>
