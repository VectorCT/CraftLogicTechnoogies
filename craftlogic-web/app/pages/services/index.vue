<script setup lang="ts">
usePageSeo({
  title: 'Services',
  description: 'Business websites, custom business systems, API integration and ongoing support for South African SMEs, built on Microsoft Azure.',
})
</script>

<template>
  <div>
    <PageHeader
      eyebrow="Services"
      title="Custom software & business systems built to scale"
      intro="Every engagement starts with understanding how your business runs today. Then we design the system that fits."
    />
    <BaseSection>
      <ServiceGrid />
    </BaseSection>
    <BaseSection
      eyebrow="Technology"
      title="Built on the Microsoft platform"
      class="bg-navy-950"
    >
      <TechStackStrip />
    </BaseSection>
    <CtaBand
      title="Not sure which service you need?"
      body="Tell us what’s slowing your team down and we’ll recommend the simplest fix."
      cta-label="Request a quote"
    />
  </div>
</template>
