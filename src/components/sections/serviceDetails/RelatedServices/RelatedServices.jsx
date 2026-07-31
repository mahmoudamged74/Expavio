import { useTranslation } from 'react-i18next'
import { ServiceCard } from '@/components/ui/ServiceCard/ServiceCard'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import styles from './RelatedServices.module.css'

export function RelatedServices({ services = [] }) {
  const { t } = useTranslation('services')
  if (!services.length) return null

  return (
    <section className={styles.section} aria-labelledby="service-related-title">
      <SectionHeading
        eyebrow={t('details.related.eyebrow')}
        title={t('details.related.title')}
        className={styles.heading}
      />

      <div className={styles.grid}>
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  )
}
