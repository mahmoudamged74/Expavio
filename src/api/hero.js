import { apiClient } from '@/lib/api/client'

export async function fetchHero(language) {
  const lang = language?.startsWith('ar') ? 'ar' : 'en'
  const { data } = await apiClient.get('/hero', {
    headers: {
      'Accept-Language': lang,
    },
  })
  return data.data
}
