import { apiClient } from '@/lib/api/client'

export function resolveLang(language) {
  return language?.startsWith('ar') ? 'ar' : 'en'
}

export async function apiGet(path, language) {
  const { data } = await apiClient.get(path, {
    headers: {
      'Accept-Language': resolveLang(language),
    },
  })
  return data.data
}

export async function apiPost(path, body, language) {
  const { data } = await apiClient.post(path, body, {
    headers: {
      'Accept-Language': resolveLang(language),
    },
  })
  return data
}
