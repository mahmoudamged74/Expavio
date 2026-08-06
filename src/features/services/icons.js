import {
  HiBuildingOffice2,
  HiGlobeAlt,
  HiBriefcase,
  HiChartBar,
  HiRocketLaunch,
  HiScale,
  HiCurrencyDollar,
  HiCpuChip,
  HiSparkles,
  HiCalendarDays,
  HiWrenchScrewdriver,
  HiBuildingLibrary,
  HiPresentationChartLine,
} from 'react-icons/hi2'

export const SERVICE_ICONS = {
  building: HiBuildingOffice2,
  landmark: HiBuildingLibrary,
  chart: HiChartBar,
  'line-chart': HiPresentationChartLine,
  globe: HiGlobeAlt,
  rocket: HiRocketLaunch,
  scale: HiScale,
  finance: HiCurrencyDollar,
  chip: HiCpuChip,
  cpu: HiCpuChip,
  sparkles: HiSparkles,
  calendar: HiCalendarDays,
  support: HiWrenchScrewdriver,
  wrench: HiWrenchScrewdriver,
  briefcase: HiBriefcase,
}

export function getServiceIcon(name) {
  return SERVICE_ICONS[name] ?? HiBriefcase
}

export function normalizeServiceIcon(name) {
  const aliases = {
    landmark: 'building',
    cpu: 'chip',
    wrench: 'support',
    'line-chart': 'chart',
  }
  return aliases[name] ?? name ?? 'briefcase'
}
