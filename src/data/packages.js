/**
 * Services page filter categories.
 * Maps to service slugs from services.js (not always 1:1 with groups).
 */
export const serviceFilters = [
  {
    id: 'all',
    ar: 'الكل',
    en: 'All',
    slugs: null,
  },
  {
    id: 'investment',
    ar: 'الاستثمار',
    en: 'Investment',
    slugs: [
      'investment-formation-setup',
      'investment-consulting',
      'foreign-investor-services',
    ],
  },
  {
    id: 'consulting',
    ar: 'الاستشارات',
    en: 'Consulting',
    slugs: ['business-development', 'investment-consulting'],
  },
  {
    id: 'finance-legal',
    ar: 'المالية والقانونية',
    en: 'Finance & Legal',
    slugs: ['legal-admin-services', 'financial-services'],
  },
  {
    id: 'tech-marketing',
    ar: 'التقنية والتسويق',
    en: 'Tech & Marketing',
    slugs: ['digital-transformation', 'marketing-branding'],
  },
  {
    id: 'operations-events',
    ar: 'التشغيل والفعاليات',
    en: 'Operations & Events',
    slugs: ['operational-support', 'conferences-exhibitions'],
  },
]

/**
 * Ready-made solution packages / bundles for the Services page.
 */
export const solutionPackages = [
  {
    id: 'new-company',
    icon: 'building',
    accent: 'blue',
    ctaSlug: 'investment-formation-setup',
    ar: {
      title: 'مسار تأسيس شركة جديدة',
      description:
        'مسار متكامل من دراسة السوق حتى التشغيل — لتأسيس كيانك بثقة وخطوات واضحة.',
      steps: [
        'دراسة السوق',
        'الترخيص',
        'التأسيس',
        'الهوية',
        'الموقع',
        'التشغيل',
      ],
    },
    en: {
      title: 'New company formation path',
      description:
        'An end-to-end path from market study to operations — forming your entity with clarity and confidence.',
      steps: [
        'Market study',
        'Licensing',
        'Formation',
        'Brand identity',
        'Website',
        'Operations',
      ],
    },
  },
  {
    id: 'foreign-investor',
    icon: 'globe',
    accent: 'teal',
    ctaSlug: 'foreign-investor-services',
    ar: {
      title: 'مسار المستثمر الأجنبي',
      description:
        'من الترخيص الاستثماري حتى الحساب البنكي والدعم التشغيلي — مرافقة كاملة للمستثمر غير المحلي.',
      steps: [
        'ترخيص استثماري',
        'تأسيس الشركة',
        'الإقامة والتأشيرات',
        'الحساب البنكي',
        'الامتثال',
        'الدعم التشغيلي',
      ],
    },
    en: {
      title: 'Foreign investor path',
      description:
        'From investment licensing to banking and operational support — full accompaniment for non-local investors.',
      steps: [
        'Investment license',
        'Company formation',
        'Residency & visas',
        'Bank account',
        'Compliance',
        'Operational support',
      ],
    },
  },
  {
    id: 'existing-company',
    icon: 'rocket',
    accent: 'gold',
    ctaSlug: 'business-development',
    ar: {
      title: 'مسار تطوير شركة قائمة',
      description:
        'لتحسين الأداء وإعادة الهيكلة والتحول الرقمي والتسويق — مسار نمو للشركات القائمة.',
      steps: [
        'تحليل الأداء',
        'إعادة الهيكلة',
        'مؤشرات الأداء',
        'التحول الرقمي',
        'التسويق',
      ],
    },
    en: {
      title: 'Existing company growth path',
      description:
        'Improve performance, restructure, digitize, and market — a growth path for established companies.',
      steps: [
        'Performance analysis',
        'Restructuring',
        'KPIs',
        'Digital transformation',
        'Marketing',
      ],
    },
  },
]

export function getLocalizedFilters(lang = 'ar') {
  const locale = lang.startsWith('en') ? 'en' : 'ar'
  return serviceFilters.map((filter) => ({
    id: filter.id,
    label: filter[locale],
    slugs: filter.slugs,
  }))
}

export function getLocalizedPackages(lang = 'ar') {
  const locale = lang.startsWith('en') ? 'en' : 'ar'
  return solutionPackages.map((pkg) => ({
    id: pkg.id,
    icon: pkg.icon,
    accent: pkg.accent,
    ctaSlug: pkg.ctaSlug,
    ...pkg[locale],
  }))
}

export function filterServicesByCategory(servicesList, filterId) {
  if (!filterId || filterId === 'all') return servicesList

  const filter = serviceFilters.find((item) => item.id === filterId)
  if (filter?.slugs) {
    const set = new Set(filter.slugs)
    return servicesList.filter((service) => set.has(service.slug))
  }

  return servicesList.filter(
    (service) =>
      service.group === filterId || service.category?.id === filterId,
  )
}
