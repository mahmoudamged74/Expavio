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
} from 'react-icons/hi2'

export const SERVICE_ICONS = {
  building: HiBuildingOffice2,
  chart: HiChartBar,
  globe: HiGlobeAlt,
  rocket: HiRocketLaunch,
  scale: HiScale,
  finance: HiCurrencyDollar,
  chip: HiCpuChip,
  sparkles: HiSparkles,
  calendar: HiCalendarDays,
  support: HiWrenchScrewdriver,
  briefcase: HiBriefcase,
}

export function getServiceIcon(name) {
  return SERVICE_ICONS[name] ?? HiBriefcase
}
