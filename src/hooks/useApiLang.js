import { useTranslation } from 'react-i18next'
import { resolveLang } from '@/lib/api/request'

export function useApiLang() {
  const { i18n } = useTranslation()
  return resolveLang(i18n.language)
}
