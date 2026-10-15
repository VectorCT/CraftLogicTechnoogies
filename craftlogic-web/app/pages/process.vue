<script setup lang="ts">
usePageSeo({
  title: 'Our Process',
  description: 'Discovery, design, build, deploy, maintain. A structured five-step process with clear deliverables and no surprises.',
})
</script>

<template>
  <div>
    <PageHeader
      eyebrow="Process"
      title="We architect before we build"
      intro="A structured, five-step process so you always know what happens next, what it costs and what you’ll receive."
    />
    <BaseSection>
      <ProcessTimeline detailed />
    </BaseSection>
    <CtaBand
      title="Start with a discovery call"
      body="Step one takes 30 minutes. We’ll talk through how your business runs today and where a system would help."
    />
  </div>
</template>
