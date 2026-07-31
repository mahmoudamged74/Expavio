import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { Accordion } from '@/components/ui/Accordion/Accordion'
import styles from './FAQSection.module.css'

export function FAQSection() {
  const { t } = useTranslation('home')
  const items = t('faq.items', { returnObjects: true })

  const accordionItems = items.map((item, index) => ({
    id: `faq-${index}`,
    title: item.q,
    content: item.a,
  }))

  return (
    <section className={`section ${styles.section}`} aria-label={t('faq.title')}>
      <div className="container">
        <SectionHeading
          eyebrow={t('faq.eyebrow')}
          title={t('faq.title')}
          align="center"
        />

        <div className={styles.accordionWrap}>
          <Accordion items={accordionItems} />
        </div>
      </div>
    </section>
  )
}
