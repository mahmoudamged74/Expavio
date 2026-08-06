import { apiGet, apiPost } from '@/lib/api/request'

export function fetchForeignInvestor(language) {
  return apiGet('/foreign-investor', language)
}

export function submitForeignInvestorInquiry(payload, language) {
  return apiPost('/foreign-investor/inquiries', payload, language)
}
