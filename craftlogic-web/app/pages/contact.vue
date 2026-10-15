<script setup lang="ts">
usePageSeo({
  title: 'Contact',
  description: 'Tell us about your project and book a discovery call with CraftLogic Technologies. We respond within one business day.',
})
</script>

<template>
  <div>
    <PageHeader
      eyebrow="Contact"
      title="Let’s talk about your project"
      intro="Tell us what you’re trying to solve. We’ll respond within one business day."
    />
    <BaseSection>
      <div class="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <ContactForm />
        <ContactDetails />
      </div>
    </BaseSection>
  </div>
</template>
