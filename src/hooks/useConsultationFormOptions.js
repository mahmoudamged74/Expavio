import { useQuery } from '@tanstack/react-query'
import { fetchConsultationFormOptions } from '@/api/consultations'
import { useApiLang } from '@/hooks/useApiLang'
import {
  FALLBACK_CLIENT_TYPES,
  FALLBACK_PREFERRED_TIMES,
  FALLBACK_PROJECT_STAGES,
  FALLBACK_NEEDS_GUIDANCE,
} from '@/features/consultation'

export function useConsultationFormOptions() {
  const lang = useApiLang()

  const query = useQuery({
    queryKey: ['consultations-form-options', lang],
    queryFn: () => fetchConsultationFormOptions(lang),
    staleTime: 5 * 60 * 1000,
  })

  const data = query.data

  return {
    ...query,
    clientTypes: data?.client_types?.length
      ? data.client_types
      : FALLBACK_CLIENT_TYPES,
    projectStages: data?.project_stages?.length
      ? data.project_stages
      : FALLBACK_PROJECT_STAGES,
    preferredContactTimes: data?.preferred_contact_times?.length
      ? data.preferred_contact_times
      : FALLBACK_PREFERRED_TIMES,
    needsGuidanceOption: data?.needs_guidance_option ?? FALLBACK_NEEDS_GUIDANCE,
  }
}
