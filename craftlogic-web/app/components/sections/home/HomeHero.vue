<template>
  <section class="relative overflow-hidden py-20 md:py-28">
    <div
      class="bg-grid pointer-events-none absolute inset-0"
      aria-hidden="true"
    />
    <BaseContainer class="relative grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
      <div>
        <p class="mb-4 text-sm font-semibold uppercase tracking-wider text-teal-500">
          Built on Logic. Crafted for Growth.
        </p>
        <h1 class="text-4xl leading-tight md:text-6xl">
          We Build the Systems That Run Your Business
        </h1>
        <p class="mt-6 max-w-2xl text-lg text-grey-400">
          Custom software and business systems for South African SMEs. Secure, structured and built to scale.
        </p>
        <div class="mt-10 flex flex-wrap gap-4">
          <BaseButton to="/contact">
            Book a discovery call
          </BaseButton>
          <BaseButton
            to="/services"
            variant="secondary"
          >
            See our services
          </BaseButton>
        </div>
      </div>
      <HeroDiagram class="hidden lg:block" />
    </BaseContainer>
  </section>
</template>
