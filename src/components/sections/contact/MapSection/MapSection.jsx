import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import styles from './MapSection.module.css'

export function MapSection() {
  const { t } = useTranslation('contact')

  return (
    <section className={styles.section} aria-labelledby="contact-map-title">
      <SectionHeading
        eyebrow={t('map.eyebrow')}
        title={t('map.title')}
        subtitle={t('map.subtitle')}
        className={styles.heading}
      />

      <div className={styles.frame}>
        <iframe
          title={t('map.iframeTitle')}
          src={t('map.embedSrc')}
          className={styles.map}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
