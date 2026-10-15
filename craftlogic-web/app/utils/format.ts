const zar = new Intl.NumberFormat('en-ZA', {
  style: 'currency',
  currency: 'ZAR',
  maximumFractionDigits: 0,
})

/** Formats a number as ZAR, e.g. 2500 → "R 2 500". Returns a fallback for null. */
export function formatZar(amount: number | null, fallback = 'Price on request'): string {
  return amount === null ? fallback : zar.format(amount)
}

/** Formats an international SA number for display, e.g. 27821234567 → "+27 82 123 4567". */
export function formatSaPhone(international: string): string {
  const m = /^27(\d{2})(\d{3})(\d{4})$/.exec(international)
  return m ? `+27 ${m[1]} ${m[2]} ${m[3]}` : `+${international}`
}
