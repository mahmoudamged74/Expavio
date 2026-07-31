import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { applyDocumentLanguage } from '@/features/localization/language'

export function LanguageProvider({ children }) {
  const { i18n } = useTranslation()

  useEffect(() => {
    applyDocumentLanguage(i18n.language)
  }, [i18n.language])

  return children
}

export async function switchLanguage(i18n, nextLang) {
  const lang = nextLang === 'en' ? 'en' : 'ar'
  await i18n.changeLanguage(lang)
  applyDocumentLanguage(lang)
}
