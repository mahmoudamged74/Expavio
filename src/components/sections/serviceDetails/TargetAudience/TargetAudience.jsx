import { useTranslation } from 'react-i18next'
import {
  HiUserGroup,
  HiGlobeAlt,
  HiBuildingOffice2,
  HiBriefcase,
  HiArrowsRightLeft,
} from 'react-icons/hi2'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import styles from './TargetAudience.module.css'

const ICONS = [HiUserGroup, HiGlobeAlt, HiBuildingOffice2, HiBriefcase, HiArrowsRightLeft]

export function TargetAudience({ audience = [] }) {
  const { t } = useTranslation('services')
  if (!audience.length) return null

  return (
    <section className={styles.section} aria-labelledby="service-audience-title">
      <SectionHeading
        eyebrow={t('details.audience.eyebrow')}
        title={t('details.audience.title')}
        className={styles.heading}
      />

      <ul className={styles.grid}>
        {audience.map((item, index) => {
          const Icon = ICONS[index % ICONS.length]
          return (
            <li key={item} className={styles.card} style={{ '--i': index }}>
              <span className={styles.icon} aria-hidden="true">
                <Icon />
              </span>
              <span className={styles.label}>{item}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
