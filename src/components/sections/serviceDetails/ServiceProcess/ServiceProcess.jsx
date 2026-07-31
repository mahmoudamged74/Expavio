import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import styles from './ServiceProcess.module.css'

export function ServiceProcess({ steps = [] }) {
  const { t } = useTranslation('services')
  if (!steps.length) return null

  return (
    <section className={styles.section} aria-labelledby="service-process-title">
      <SectionHeading
        eyebrow={t('details.process.eyebrow')}
        title={t('details.process.title')}
        className={styles.heading}
      />

      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li key={step} className={styles.step} style={{ '--i': index }}>
            <span className={styles.index} aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className={styles.label}>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
