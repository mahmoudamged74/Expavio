/** Placeholder for consultation form schema / API wiring */
export const consultationChannels = ['form', 'whatsapp', 'call']

export const TOTAL_STEPS = 5

export const INITIAL_CONSULTATION_VALUES = {
  customerType: '',
  serviceSlug: '',
  activity: '',
  stage: '',
  city: '',
  need: '',
  name: '',
  phone: '',
  email: '',
  company: '',
  preferredTime: '',
}

export function buildConsultationPayload(values, meta = {}) {
  return {
    ...values,
    source: meta.source ?? 'website',
    serviceSlug: meta.serviceSlug ?? values.serviceSlug ?? null,
    serviceTitle: meta.serviceTitle ?? null,
    createdAt: new Date().toISOString(),
  }
}

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim())
}

export function validateConsultationStep(step, values) {
  switch (step) {
    case 1:
      return values.customerType ? null : 'customerType'
    case 2:
      return values.serviceSlug ? null : 'service'
    case 3:
      if (!String(values.activity || '').trim()) return 'activity'
      if (!String(values.need || '').trim()) return 'need'
      return null
    case 4:
      if (!String(values.name || '').trim()) return 'name'
      if (!String(values.phone || '').trim()) return 'phone'
      if (!isValidEmail(values.email)) return 'email'
      return null
    default:
      return null
  }
}
