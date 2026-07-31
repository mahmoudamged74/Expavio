export function applyDocumentLanguage(lang) {
  const normalized = lang?.startsWith('en') ? 'en' : 'ar'
  const dir = normalized === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.lang = normalized
  document.documentElement.dir = dir
  return { lang: normalized, dir }
}
