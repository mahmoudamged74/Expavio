import { useTranslation } from 'react-i18next'
import { HiCheck } from 'react-icons/hi2'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import styles from './SubServicesList.module.css'

export function SubServicesList({ items = [] }) {
  const { t } = useTranslation('services')
  if (!items.length) return null

  return (
    <section className={styles.section} aria-labelledby="service-subservices-title">
      <SectionHeading
        eyebrow={t('details.subServices.eyebrow')}
        title={t('details.subServices.title')}
        className={styles.heading}
      />

      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={item} className={styles.item} style={{ '--i': index }}>
            <span className={styles.check} aria-hidden="true">
              <HiCheck />
            </span>
            <span className={styles.label}>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
