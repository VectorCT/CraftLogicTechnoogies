<script setup lang="ts">
const { form, errors, submit, serviceOptions, isSubmitting, isSuccess, reference, serverError } = useContactForm()

const inputClass = 'mt-1.5 w-full rounded-md border border-navy-700 bg-navy-950 px-3 py-2.5 text-white placeholder:text-grey-400 focus:border-azure-500 aria-invalid:border-danger-400'
</script>

<template>
  <div
    v-if="isSuccess"
    role="status"
    class="rounded-lg border border-teal-500 bg-navy-800 p-6"
  >
    <h2 class="text-xl">
      Thanks, we’ve received your enquiry.
    </h2>
    <p class="mt-2 text-grey-400">
      Reference: <span class="font-mono text-white">{{ reference }}</span>. We’ll respond within one business day.
    </p>
  </div>

  <form
    v-else
    class="grid gap-6"
    novalidate
    @submit.prevent="submit"
  >
    <div class="grid gap-6 md:grid-cols-2">
      <FormField
        v-slot="{ id, describedBy, invalid }"
        label="Name"
        :error="errors.name"
        required
      >
        <input
          :id="id"
          v-model="form.name"
          :class="inputClass"
          autocomplete="name"
          required
          :aria-invalid="invalid"
          :aria-describedby="describedBy"
        >
      </FormField>
      <FormField
        v-slot="{ id, describedBy, invalid }"
        label="Email"
        :error="errors.email"
        required
      >
        <input
          :id="id"
          v-model="form.email"
          type="email"
          :class="inputClass"
          autocomplete="email"
          required
          :aria-invalid="invalid"
          :aria-describedby="describedBy"
        >
      </FormField>
      <FormField
        v-slot="{ id }"
        label="Company"
      >
        <input
          :id="id"
          v-model="form.company"
          :class="inputClass"
          autocomplete="organization"
        >
      </FormField>
      <FormField
        v-slot="{ id }"
        label="Phone"
      >
        <input
          :id="id"
          v-model="form.phone"
          type="tel"
          :class="inputClass"
          autocomplete="tel"
        >
      </FormField>
    </div>

    <FormField
      v-slot="{ id }"
      label="What do you need help with?"
      required
    >
      <select
        :id="id"
        v-model="form.service"
        :class="inputClass"
      >
        <option
          v-for="opt in serviceOptions"
          :key="opt.value"
          :value="opt.value"
        >
          {{ opt.label }}
        </option>
      </select>
    </FormField>

    <FormField
      v-slot="{ id, describedBy, invalid }"
      label="Tell us about your project"
      hint="What’s the problem, who is affected and what have you tried so far?"
      :error="errors.message"
      required
    >
      <textarea
        :id="id"
        v-model="form.message"
        rows="6"
        :class="inputClass"
        required
        :aria-invalid="invalid"
        :aria-describedby="describedBy"
      />
    </FormField>

    <!-- Honeypot: hidden from people, visible to bots -->
    <div
      class="hidden"
      aria-hidden="true"
    >
      <label>Website
        <input
          v-model="form.website"
          type="text"
          name="website"
          tabindex="-1"
          autocomplete="off"
        >
      </label>
    </div>

    <div>
      <label class="flex gap-3 text-sm">
        <input
          v-model="form.popiaConsent"
          type="checkbox"
          class="mt-0.5 size-4 shrink-0 accent-azure-600"
          :aria-invalid="!!errors.popiaConsent"
          :aria-describedby="errors.popiaConsent ? 'popia-error' : undefined"
        >
        <span>
          I consent to CraftLogic Technologies processing my details to respond to this enquiry, as described in the
          <NuxtLink
            to="/privacy"
            class="text-azure-400 underline"
          >Privacy Policy</NuxtLink>. (required)
        </span>
      </label>
      <p
        v-if="errors.popiaConsent"
        id="popia-error"
        class="mt-1 text-sm text-danger-400"
      >
        {{ errors.popiaConsent }}
      </p>
    </div>

    <p
      v-if="serverError"
      role="alert"
      class="rounded-md border border-danger-400 p-3 text-sm text-danger-400"
    >
      {{ serverError }}
    </p>

    <div>
      <BaseButton
        type="submit"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? 'Sending…' : 'Submit enquiry' }}
      </BaseButton>
    </div>
  </form>
</template>
