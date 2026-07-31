import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ServicesHero } from '@/components/sections/services/ServicesHero/ServicesHero'
import { ServicesGrid } from '@/components/sections/services/ServicesGrid/ServicesGrid'
import { SolutionPackages } from '@/components/sections/services/SolutionPackages/SolutionPackages'
import { ConsultationBanner } from '@/components/sections/services/ConsultationBanner/ConsultationBanner'
import {
  getLocalizedServices,
  getLocalizedFilters,
  getLocalizedPackages,
  filterServicesByCategory,
} from '@/features/services'

export function ServicesPage() {
  const { i18n } = useTranslation('services')
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = useMemo(
    () => getLocalizedFilters(i18n.language),
    [i18n.language],
  )

  const packages = useMemo(
    () => getLocalizedPackages(i18n.language),
    [i18n.language],
  )

  const allServices = useMemo(
    () => getLocalizedServices(i18n.language),
    [i18n.language],
  )

  const filteredServices = useMemo(
    () => filterServicesByCategory(allServices, activeFilter),
    [allServices, activeFilter],
  )

  return (
    <>
      <ServicesHero />
      <ServicesGrid
        services={filteredServices}
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <SolutionPackages packages={packages} />
      <ConsultationBanner />
    </>
  )
}
