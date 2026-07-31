import { useTranslation } from 'react-i18next'
import { Accordion } from '@/components/ui/Accordion/Accordion'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import styles from './ServiceFAQ.module.css'

export function ServiceFAQ({ items = [] }) {
  const { t } = useTranslation('services')
  if (!items.length) return null

  const accordionItems = items.map((item, index) => ({
    id: `service-faq-${index}`,
    title: item.q,
    content: item.a,
  }))

  return (
    <section className={styles.section} aria-labelledby="service-faq-title">
      <SectionHeading
        eyebrow={t('details.faq.eyebrow')}
        title={t('details.faq.title')}
        className={styles.heading}
      />

      <div className={styles.wrap}>
        <Accordion items={accordionItems} />
      </div>
    </section>
  )
}
