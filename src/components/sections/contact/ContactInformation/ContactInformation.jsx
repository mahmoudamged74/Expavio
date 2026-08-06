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
import { useSettings } from '@/hooks/useSettings'
import { toTelHref, toWhatsAppHref } from '@/lib/contact'
import styles from './ContactInformation.module.css'

export function ContactInformation() {
  const { t } = useTranslation('contact')
  const { data: settings } = useSettings()

  const fallbackPhones = t('info.phones.items', { returnObjects: true })
  const fallbackEmails = t('info.emails.items', { returnObjects: true })

  const phoneList =
    settings?.phone || settings?.client_support_phone
      ? [
          settings.phone
            ? { label: fallbackPhones?.[0]?.label ?? 'Phone', value: settings.phone }
            : null,
          settings.client_support_phone
            ? {
                label: fallbackPhones?.[1]?.label ?? 'Support',
                value: settings.client_support_phone,
              }
            : null,
        ].filter(Boolean)
      : Array.isArray(fallbackPhones)
        ? fallbackPhones
        : []

  const emailList =
    settings?.email || settings?.consultation_email
      ? [
          settings.email
            ? { label: fallbackEmails?.[0]?.label ?? 'Email', value: settings.email }
            : null,
          settings.consultation_email
            ? {
                label: fallbackEmails?.[1]?.label ?? 'Consultation',
                value: settings.consultation_email,
              }
            : null,
        ].filter(Boolean)
      : Array.isArray(fallbackEmails)
        ? fallbackEmails
        : []

  const address = settings?.address ?? t('info.addressBlock.value')
  const workingHours = settings?.working_hours ?? t('info.hours.value')
  const [hoursValue, hoursNote] = String(workingHours)
    .split('\n')
    .map((part) => part.trim())
    .filter(Boolean)
  const whatsappHref =
    toWhatsAppHref(settings?.whatsapp) ?? t('info.whatsapp.href')

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
                  <a href={toTelHref(item.value)}>{item.value}</a>
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
            <p className={styles.text}>{address}</p>
          </div>
        </article>

        <article className={styles.block}>
          <span className={styles.icon} aria-hidden="true">
            <HiClock />
          </span>
          <div>
            <h3 className={styles.blockTitle}>{t('info.hours.label')}</h3>
            <p className={styles.text}>{hoursValue || t('info.hours.value')}</p>
            {(hoursNote || (!settings?.working_hours && t('info.hours.note'))) && (
              <p className={styles.note}>
                {hoursNote || t('info.hours.note')}
              </p>
            )}
          </div>
        </article>
      </div>

      <Button
        href={whatsappHref}
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
