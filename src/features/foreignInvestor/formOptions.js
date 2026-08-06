/** API keys accepted by POST /foreign-investor/inquiries */

export const HAS_EXISTING_COMPANY_OPTIONS = [
  { key: 'yes', labelKey: 'form.hasCompanyYes' },
  { key: 'no', labelKey: 'form.hasCompanyNo' },
]

export const INVESTMENT_TYPE_OPTIONS = [
  { key: 'new_entity', labelKey: 'form.investmentTypes.new_entity' },
  { key: 'foreign_branch', labelKey: 'form.investmentTypes.foreign_branch' },
  { key: 'regional_hq', labelKey: 'form.investmentTypes.regional_hq' },
  { key: 'acquisition', labelKey: 'form.investmentTypes.acquisition' },
  { key: 'saudi_partnership', labelKey: 'form.investmentTypes.saudi_partnership' },
]

export const CAPITAL_OPTIONS = [
  { key: 'under_500k', labelKey: 'form.capitalRanges.under_500k' },
  { key: '500k_2m', labelKey: 'form.capitalRanges.500k_2m' },
  { key: '2m_10m', labelKey: 'form.capitalRanges.2m_10m' },
  { key: 'over_10m', labelKey: 'form.capitalRanges.over_10m' },
]

/** Order matches CMS / static services.items */
export const SERVICES_NEEDED_KEYS = [
  'investment_licence',
  'foreign_company_formation',
  'branch_opening',
  'foreign_ownership_100',
  'residency_visas',
  'bank_account',
  'government_registrations',
  'compliance_accounting',
  'operations_hiring',
]

export function buildForeignInvestorPayload(values, selectedServiceKeys) {
  return {
    name: String(values.name || '').trim(),
    email: String(values.email || '').trim(),
    phone: String(values.phone || '').trim() || null,
    nationality: String(values.nationality || '').trim(),
    country_of_residence: String(values.country || '').trim(),
    target_activity: String(values.activity || '').trim(),
    has_existing_company: values.hasCompany || null,
    investment_type: values.investmentType || null,
    approximate_capital: values.capital || null,
    services_needed: selectedServiceKeys,
    notes: String(values.notes || '').trim() || null,
  }
}

export function validateForeignInvestorForm(values, selectedServiceKeys) {
  if (!String(values.name || '').trim()) return 'name'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(values.email || '').trim()))
    return 'email'
  if (!String(values.nationality || '').trim()) return 'nationality'
  if (!String(values.country || '').trim()) return 'country'
  if (!String(values.activity || '').trim()) return 'activity'
  if (!values.hasCompany) return 'hasCompany'
  if (!values.investmentType) return 'investmentType'
  if (!values.capital) return 'capital'
  if (!selectedServiceKeys?.length) return 'services'
  return null
}
