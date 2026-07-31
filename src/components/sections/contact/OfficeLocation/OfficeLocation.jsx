import { useTranslation } from 'react-i18next'
import { HiMapPin, HiBuildingOffice2 } from 'react-icons/hi2'
import { Button } from '@/components/ui/Button/Button'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import styles from './OfficeLocation.module.css'

export function OfficeLocation() {
  const { t } = useTranslation('contact')

  return (
    <section className={styles.section} aria-labelledby="contact-office-title">
      <SectionHeading
        eyebrow={t('office.eyebrow')}
        title={t('office.title')}
        subtitle={t('office.subtitle')}
        className={styles.heading}
      />

      <article className={styles.card}>
        <span className={styles.icon} aria-hidden="true">
          <HiBuildingOffice2 />
        </span>
        <div className={styles.body}>
          <h3 className={styles.name}>{t('office.name')}</h3>
          <p className={styles.address}>
            <HiMapPin aria-hidden="true" />
            <span>{t('office.address')}</span>
          </p>
          <Button
            href={t('office.directionsHref')}
            variant="outline"
            size="md"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('office.directions')}
          </Button>
        </div>
      </article>
    </section>
  )
}
