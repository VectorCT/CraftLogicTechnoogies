<script setup lang="ts">
import { site } from '#shared/site'

usePageSeo({
  title: 'Privacy Policy',
  description: 'How CraftLogic Technologies collects, uses and protects personal information in line with the Protection of Personal Information Act (POPIA).',
})

const consent = useConsentStore()

// TODO (T-207): update when the policy is approved, and whenever it changes.
const lastUpdated = '14 October 2026'
</script>

<template>
  <div>
    <PageHeader
      eyebrow="Legal"
      title="Privacy Policy"
      :intro="`Last updated: ${lastUpdated}`"
    />
    <BaseSection>
      <!-- TODO (T-207): DRAFT. Have this reviewed by a POPIA practitioner before launch,
           confirm the Information Officer and registration with the Information Regulator. -->
      <p class="mb-10 max-w-3xl rounded-md border border-dashed border-muted p-4 text-sm text-muted">
        Draft policy pending legal review.
      </p>

      <div class="prose-cl">
        <p>
          {{ site.name }} (“we”, “us”) respects your privacy. This policy explains what personal information we
          collect through this website, why we collect it, how we protect it and the rights you have under the
          Protection of Personal Information Act 4 of 2013 (POPIA).
        </p>

        <h2>1. Who is responsible for your information</h2>
        <p>
          {{ site.name }} is the responsible party for personal information collected through this website.
          You can contact our Information Officer at <a :href="`mailto:${site.email}`">{{ site.email }}</a>.
        </p>

        <h2>2. What we collect</h2>
        <h3>Information you give us</h3>
        <p>When you submit the contact form we collect:</p>
        <ul>
          <li>your name and email address;</li>
          <li>optionally, your company name and phone number;</li>
          <li>the service you’re interested in and the message you write;</li>
          <li>a record that you gave consent, and when.</li>
        </ul>
        <h3>Information collected automatically</h3>
        <ul>
          <li>
            <strong>Essential cookies:</strong> a single cookie (<code>cl_consent</code>) that remembers your cookie
            choice for 12 months.
          </li>
          <li>
            <strong>Analytics cookies (only with your consent):</strong> if you accept, we use Microsoft Clarity to
            understand how visitors use the site, for example which pages are viewed and where people click.
            We do not use this information to identify you.
          </li>
          <li>
            <strong>Server logs:</strong> our hosting provider records technical information such as IP address and
            browser type for security and to prevent abuse. We don’t use this to build profiles.
          </li>
        </ul>

        <h2>3. Why we use it</h2>
        <ul>
          <li>to respond to your enquiry and, if you ask, prepare a proposal;</li>
          <li>to keep the website secure and prevent spam or abuse;</li>
          <li>with your consent, to improve the website using aggregated analytics.</li>
        </ul>
        <p>
          We process your information on the basis of your consent, and where necessary to take steps you have
          requested before entering into a contract. We do not sell your personal information or use it for
          unsolicited direct marketing.
        </p>

        <h2>4. Who we share it with</h2>
        <p>
          We only share personal information with service providers (“operators”) that help us run this website and
          our business, under agreements that require them to protect it:
        </p>
        <ul>
          <li>Microsoft (Azure hosting, Microsoft 365 email and, if you consent, Clarity analytics).</li>
        </ul>
        <p>
          Some of these providers may store or process information outside South Africa. Where this happens, we rely
          on providers that are bound by laws, binding corporate rules or agreements that give a level of protection
          substantially similar to POPIA, as required by section 72 of the Act.
        </p>

        <h2>5. How long we keep it</h2>
        <p>
          We keep enquiry details for as long as needed to respond and follow up, and for no longer than
          24 months if no business relationship follows, unless the law requires us to keep it longer. If you become
          a client, records are kept in line with our contractual and legal obligations.
        </p>

        <h2>6. How we protect it</h2>
        <p>
          We use appropriate technical and organisational measures, including encrypted connections (HTTPS),
          access control based on Microsoft Entra ID, and limiting access to people who need it. We do not write the
          contents of enquiries to application logs.
        </p>

        <h2>7. Your rights</h2>
        <p>Under POPIA you have the right to:</p>
        <ul>
          <li>ask whether we hold personal information about you and request a copy;</li>
          <li>ask us to correct or delete your information;</li>
          <li>object to the processing of your information;</li>
          <li>withdraw your consent at any time, without affecting processing that has already happened;</li>
          <li>
            lodge a complaint with the Information Regulator
            (<a
              href="https://inforegulator.org.za"
              rel="noopener"
              target="_blank"
            >inforegulator.org.za</a>).
          </li>
        </ul>
        <p>
          To exercise these rights, email <a :href="`mailto:${site.email}`">{{ site.email }}</a>. We may need to
          verify your identity before acting on a request.
        </p>

        <h2>8. Managing cookies</h2>
        <p>
          You can change your cookie choice at any time.
        </p>
        <p>
          <BaseButton
            size="sm"
            variant="secondary"
            @click="consent.reset"
          >
            Change cookie preferences
          </BaseButton>
        </p>

        <h2>9. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The date at the top of this page shows when it was last
          changed.
        </p>
      </div>
    </BaseSection>
  </div>
</template>
