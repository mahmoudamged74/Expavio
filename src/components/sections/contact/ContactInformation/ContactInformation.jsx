import { useTranslation } from 'react-i18next'
import {
  HiPhone,
  HiEnvelope,
  HiMapPin,
  HiClock,
} from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa6'
import { Button } from '@/components/ui/Button/Button'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import styles from './ContactInformation.module.css'

export function ContactInformation() {
  const { t } = useTranslation('contact')
  const phones = t('info.phones.items', { returnObjects: true })
  const emails = t('info.emails.items', { returnObjects: true })
  const phoneList = Array.isArray(phones) ? phones : []
  const emailList = Array.isArray(emails) ? emails : []

  return (
    <section className={styles.section} aria-labelledby="contact-info-title">
      <SectionHeading
        eyebrow={t('info.eyebrow')}
        title={t('info.title')}
        subtitle={t('info.subtitle')}
        className={styles.heading}
      />

      <div className={styles.blocks}>
        <article className={styles.block}>
          <span className={styles.icon} aria-hidden="true">
            <HiPhone />
          </span>
          <div>
            <h3 className={styles.blockTitle}>{t('info.phones.label')}</h3>
            <ul className={styles.list}>
              {phoneList.map((item) => (
                <li key={item.value}>
                  <span className={styles.itemLabel}>{item.label}</span>
                  <a href={`tel:${item.value.replace(/\s/g, '')}`}>{item.value}</a>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className={styles.block}>
          <span className={styles.icon} aria-hidden="true">
            <HiEnvelope />
          </span>
          <div>
            <h3 className={styles.blockTitle}>{t('info.emails.label')}</h3>
            <ul className={styles.list}>
              {emailList.map((item) => (
                <li key={item.value}>
                  <span className={styles.itemLabel}>{item.label}</span>
                  <a href={`mailto:${item.value}`}>{item.value}</a>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className={styles.block}>
          <span className={styles.icon} aria-hidden="true">
            <HiMapPin />
          </span>
          <div>
            <h3 className={styles.blockTitle}>{t('info.addressBlock.label')}</h3>
            <p className={styles.text}>{t('info.addressBlock.value')}</p>
          </div>
        </article>

        <article className={styles.block}>
          <span className={styles.icon} aria-hidden="true">
            <HiClock />
          </span>
          <div>
            <h3 className={styles.blockTitle}>{t('info.hours.label')}</h3>
            <p className={styles.text}>{t('info.hours.value')}</p>
            <p className={styles.note}>{t('info.hours.note')}</p>
          </div>
        </article>
      </div>

      <Button
        href={t('info.whatsapp.href')}
        variant="primary"
        size="lg"
        className={styles.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp aria-hidden="true" />
        {t('info.whatsapp.label')}
      </Button>
    </section>
  )
}
