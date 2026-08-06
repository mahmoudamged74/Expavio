import { apiGet, apiPost } from '@/lib/api/request'

export function fetchConsultationFormOptions(language) {
  return apiGet('/consultations/form-options', language)
}

export function submitConsultation(payload, language) {
  return apiPost('/consultations', payload, language)
}
