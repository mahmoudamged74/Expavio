import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import styles from './ServiceOverview.module.css'

export function ServiceOverview({ service }) {
  const { t } = useTranslation('services')
  const sections = Array.isArray(service.sections) ? service.sections : []

  return (
    <section className={styles.section} aria-labelledby="service-overview-title">
      <SectionHeading
        eyebrow={t('details.overview.eyebrow')}
        title={t('details.overview.title')}
        className={styles.heading}
      />

      <div className={styles.body}>
        <p className={styles.lead}>{service.description}</p>

        {sections.length > 0 && (
          <div className={styles.blocks}>
            {sections.map((block) => (
              <article key={block.title} className={styles.block}>
                <h3 className={styles.blockTitle}>{block.title}</h3>
                <p className={styles.blockText}>{block.body}</p>
              </article>
            ))}
          </div>
        )}

        {service.outcome ? (
          <aside className={styles.outcome}>
            <p className={styles.outcomeLabel}>{t('details.overview.outcomeLabel')}</p>
            <p className={styles.outcomeText}>{service.outcome}</p>
          </aside>
        ) : null}
      </div>
    </section>
  )
}
