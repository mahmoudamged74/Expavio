import { useTranslation } from 'react-i18next'
import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa6'
import { Button } from '@/components/ui/Button/Button'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { useSettings } from '@/hooks/useSettings'
import { toWhatsAppHref } from '@/lib/contact'
import styles from './SocialLinks.module.css'

const ICONS = {
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  x: FaXTwitter,
  instagram: FaInstagram,
  youtube: FaYoutube,
}

export function SocialLinks() {
  const { t } = useTranslation('contact')
  const { data: settings } = useSettings()
  const fallbackLinks = t('social.links', { returnObjects: true })

  const list =
    settings?.social_links
      ? Object.entries(settings.social_links)
          .filter(([, href]) => Boolean(href))
          .map(([id, href]) => ({
            id,
            href,
            label:
              (Array.isArray(fallbackLinks)
                ? fallbackLinks.find((item) => item.id === id || (id === 'twitter' && item.id === 'x'))
                    ?.label
                : null) ?? id,
          }))
      : Array.isArray(fallbackLinks)
        ? fallbackLinks
        : []

  const whatsappHref =
    toWhatsAppHref(settings?.whatsapp) ?? t('info.whatsapp.href')

  return (
    <section className={`section ${styles.section}`} aria-labelledby="contact-social-title">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow={t('social.eyebrow')}
          title={t('social.title')}
          subtitle={t('social.subtitle')}
          align="center"
          className={styles.heading}
        />

        <ul className={styles.grid}>
          {list.map((link) => {
            const Icon = ICONS[link.id] ?? FaLinkedinIn
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={styles.card}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.icon} aria-hidden="true">
                    <Icon />
                  </span>
                  <span className={styles.label}>{link.label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        <Button
          href={whatsappHref}
          variant="primary"
          size="lg"
          className={styles.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp aria-hidden="true" />
          {t('social.whatsappCta')}
        </Button>
      </div>
    </section>
  )
}
