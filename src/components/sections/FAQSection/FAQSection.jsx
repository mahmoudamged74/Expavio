import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { Accordion } from '@/components/ui/Accordion/Accordion'
import { useFaqs } from '@/hooks/useFaqs'
import styles from './FAQSection.module.css'

export function FAQSection() {
  const { t } = useTranslation('home')
  const { data: faqs } = useFaqs()
  const fallbackItems = t('faq.items', { returnObjects: true })

  const items =
    Array.isArray(faqs) && faqs.length > 0
      ? [...faqs]
          .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
          .map((item) => ({ q: item.question, a: item.answer }))
      : Array.isArray(fallbackItems)
        ? fallbackItems
        : []

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
