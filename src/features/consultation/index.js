/** Consultation form schema / API wiring */

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

export const FALLBACK_CLIENT_TYPES = [
  {
    key: 'individual_investor',
    label: 'مستثمر فرد',
    description: 'أفراد يخططون للاستثمار أو تأسيس كيان في المملكة.',
  },
  {
    key: 'saudi_company',
    label: 'شركة سعودية',
    description: 'شركات قائمة داخل المملكة تحتاج توسعًا أو امتثالًا أو تشغيلًا.',
  },
  {
    key: 'foreign_company',
    label: 'شركة أجنبية',
    description: 'شركات خارجية تسعى لدخول السوق السعودي.',
  },
  {
    key: 'government_entity',
    label: 'جهة حكومية',
    description: 'جهات ومؤسسات تحتاج دعمًا استشاريًا أو تشغيليًا.',
  },
  {
    key: 'startup',
    label: 'شركة ناشئة',
    description: 'مشاريع في مرحلة مبكرة تحتاج تأسيسًا وتطويرًا ونموًا.',
  },
]

export const FALLBACK_PROJECT_STAGES = [
  { key: 'idea', label: 'فكرة أولية' },
  { key: 'planning', label: 'تخطيط ودراسة' },
  { key: 'launching', label: 'قيد التأسيس / الإطلاق' },
  { key: 'operating', label: 'قيد التشغيل' },
  { key: 'expanding', label: 'توسع أو إعادة هيكلة' },
]

export const FALLBACK_PREFERRED_TIMES = [
  { key: 'morning', label: 'صباحًا (9 ص – 12 م)' },
  { key: 'afternoon', label: 'ظهرًا (12 م – 4 م)' },
  { key: 'evening', label: 'مساءً (4 م – 8 م)' },
  { key: 'anytime', label: 'أي وقت مناسب' },
]

export const FALLBACK_NEEDS_GUIDANCE = {
  key: 'needs_guidance',
  label: 'غير متأكد — أحتاج توجيهًا',
  description: 'سنساعدك في تحديد الخدمة الأنسب لاحتياجك بعد مراجعة طلبك.',
}

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim())
}

export function isValidPhone(value) {
  const digits = String(value || '').replace(/\D/g, '')
  return digits.length >= 9 && digits.length <= 15
}

export function validateConsultationStep(step, values) {
  switch (step) {
    case 1:
      return values.customerType ? null : 'customerType'
    case 2:
      return values.serviceSlug ? null : 'service'
    case 3:
      if (!String(values.activity || '').trim()) return 'activity'
      if (!values.stage) return 'stage'
      if (!String(values.city || '').trim()) return 'city'
      if (!String(values.need || '').trim()) return 'need'
      return null
    case 4:
      if (!String(values.name || '').trim()) return 'name'
      if (!isValidPhone(values.phone)) return 'phone'
      if (!isValidEmail(values.email)) return 'email'
      if (!values.preferredTime) return 'preferredTime'
      return null
    default:
      return null
  }
}

const API_FIELD_TO_FORM = {
  client_type: 'customerType',
  service_id: 'service',
  activity: 'activity',
  project_stage: 'stage',
  city: 'city',
  message: 'need',
  name: 'name',
  phone: 'phone',
  email: 'email',
  company: 'company',
  preferred_contact_time: 'preferredTime',
}

const FORM_FIELD_TO_STEP = {
  customerType: 1,
  service: 2,
  activity: 3,
  stage: 3,
  city: 3,
  need: 3,
  name: 4,
  phone: 4,
  email: 4,
  company: 4,
  preferredTime: 4,
}

export function parseConsultationApiErrors(error) {
  const payload = error?.response?.data
  const errors = payload?.data?.errors || payload?.errors
  if (!errors || typeof errors !== 'object') {
    return {
      message: payload?.message || null,
      fieldErrors: {},
      firstField: null,
      step: null,
    }
  }

  const fieldErrors = {}
  for (const [apiField, messages] of Object.entries(errors)) {
    const formField = API_FIELD_TO_FORM[apiField] || apiField
    const list = Array.isArray(messages) ? messages : [messages]
    fieldErrors[formField] = list.filter(Boolean).join(' ')
  }

  const firstField = Object.keys(fieldErrors)[0] || null
  return {
    message: payload?.message || null,
    fieldErrors,
    firstField,
    step: firstField ? FORM_FIELD_TO_STEP[firstField] || null : null,
  }
}

export function buildConsultationApiPayload(values, { services = [] } = {}) {
  const needsGuidance = values.serviceSlug === 'unsure'
  const selectedService = needsGuidance
    ? null
    : services.find((service) => service.slug === values.serviceSlug)

  return {
    client_type: values.customerType,
    service_id: selectedService?.id ?? null,
    needs_guidance: needsGuidance,
    activity: String(values.activity || '').trim(),
    project_stage: values.stage || null,
    city: String(values.city || '').trim(),
    message: String(values.need || '').trim(),
    name: String(values.name || '').trim(),
    phone: String(values.phone || '').trim(),
    email: String(values.email || '').trim(),
    company: String(values.company || '').trim() || null,
    preferred_contact_time: values.preferredTime || null,
  }
}

/** @deprecated local-only helper kept for other forms until wired */
export function buildConsultationPayload(values, meta = {}) {
  return {
    ...values,
    source: meta.source ?? 'website',
    serviceSlug: meta.serviceSlug ?? values.serviceSlug ?? null,
    serviceTitle: meta.serviceTitle ?? null,
    createdAt: new Date().toISOString(),
  }
}
