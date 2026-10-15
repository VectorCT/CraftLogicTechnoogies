interface MailMessage {
  to: string
  subject: string
  text: string
  replyTo?: { address: string, name?: string }
}

interface GraphToken {
  access_token: string
  expires_in: number
}

let cachedToken: { value: string, expiresAt: number } | null = null

/** True when all Microsoft Graph settings are present (see .env.example). */
export function isMailConfigured(): boolean {
  const { mail, contactInbox } = useRuntimeConfig()
  return Boolean(mail.tenantId && mail.clientId && mail.clientSecret && mail.sender && contactInbox)
}

/** App-only token via client credentials. Requires the Mail.Send application permission. */
async function getGraphToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) return cachedToken.value

  const { mail } = useRuntimeConfig()
  const token = await $fetch<GraphToken>(
    `https://login.microsoftonline.com/${mail.tenantId}/oauth2/v2.0/token`,
    {
      method: 'POST',
      body: new URLSearchParams({
        client_id: mail.clientId,
        client_secret: mail.clientSecret,
        scope: 'https://graph.microsoft.com/.default',
        grant_type: 'client_credentials',
      }),
    },
  )

  cachedToken = { value: token.access_token, expiresAt: Date.now() + token.expires_in * 1000 }
  return token.access_token
}

/**
 * Sends a plain-text email through Microsoft Graph as the configured sender mailbox.
 * Plain text avoids HTML-injection from user-supplied content.
 */
export async function sendMail({ to, subject, text, replyTo }: MailMessage): Promise<void> {
  const { mail } = useRuntimeConfig()
  const accessToken = await getGraphToken()

  await $fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(mail.sender)}/sendMail`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}` },
    body: {
      message: {
        subject,
        body: { contentType: 'Text', content: text },
        toRecipients: [{ emailAddress: { address: to } }],
        replyTo: replyTo ? [{ emailAddress: replyTo }] : [],
      },
      saveToSentItems: false,
    },
  })
}
