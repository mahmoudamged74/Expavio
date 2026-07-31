import { useTranslation } from 'react-i18next'
import {
  HiClipboardDocumentList,
  HiQueueList,
  HiArrowPath,
  HiDocumentText,
  HiBellAlert,
  HiLifebuoy,
} from 'react-icons/hi2'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import styles from './ServiceDeliverables.module.css'

const ICONS = [
  HiClipboardDocumentList,
  HiQueueList,
  HiArrowPath,
  HiDocumentText,
  HiBellAlert,
  HiLifebuoy,
]

export function ServiceDeliverables({ deliverables = [] }) {
  const { t } = useTranslation('services')
  if (!deliverables.length) return null

  return (
    <section className={styles.section} aria-labelledby="service-deliverables-title">
      <SectionHeading
        eyebrow={t('details.deliverables.eyebrow')}
        title={t('details.deliverables.title')}
        className={styles.heading}
      />

      <ul className={styles.grid}>
        {deliverables.map((item, index) => {
          const Icon = ICONS[index % ICONS.length]
          return (
            <li key={item} className={styles.card} style={{ '--i': index }}>
              <span className={styles.icon} aria-hidden="true">
                <Icon />
              </span>
              <span className={styles.label}>{item}</span>
              <span className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
