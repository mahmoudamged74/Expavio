/**
 * Client-stage personas → related service slugs (from services.js).
 */
export const audienceProfiles = [
  {
    id: 'new-investor',
    icon: 'rocket',
    services: [
      'investment-formation-setup',
      'investment-consulting',
      'business-development',
      'legal-admin-services',
      'financial-services',
    ],
  },
  {
    id: 'foreign-company',
    icon: 'globe',
    services: [
      'foreign-investor-services',
      'investment-formation-setup',
      'legal-admin-services',
      'financial-services',
      'operational-support',
    ],
  },
  {
    id: 'restructuring',
    icon: 'scale',
    services: [
      'investment-formation-setup',
      'business-development',
      'legal-admin-services',
      'financial-services',
    ],
  },
  {
    id: 'digital',
    icon: 'chip',
    services: [
      'digital-transformation',
      'business-development',
      'operational-support',
      'marketing-branding',
    ],
  },
  {
    id: 'operations',
    icon: 'support',
    services: [
      'operational-support',
      'financial-services',
      'legal-admin-services',
      'business-development',
    ],
  },
  {
    id: 'brand-growth',
    icon: 'sparkles',
    services: [
      'marketing-branding',
      'business-development',
      'conferences-exhibitions',
      'digital-transformation',
    ],
  },
]

export function getAudienceById(id) {
  return audienceProfiles.find((item) => item.id === id) ?? audienceProfiles[0]
}
