export function digitsOnly(value = '') {
  return String(value).replace(/\D/g, '')
}

export function toWhatsAppHref(phone) {
  const digits = digitsOnly(phone)
  return digits ? `https://wa.me/${digits}` : null
}

export function toTelHref(phone) {
  const digits = digitsOnly(phone)
  return digits ? `tel:${digits}` : null
}
