export function formatPhoneNumber(value: string) {
  const digits = value.replace(/\D/g, '')
  const localDigits =
    digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits

  if (localDigits.length !== 10) return value

  return `${localDigits.slice(0, 3)}-${localDigits.slice(3, 6)}-${localDigits.slice(6)}`
}

export function phoneHref(value: string) {
  const digits = value.replace(/\D/g, '')
  return digits ? `tel:+${digits}` : ''
}
