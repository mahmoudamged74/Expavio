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
import styles from './SocialLinks.module.css'

const ICONS = {
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  instagram: FaInstagram,
  youtube: FaYoutube,
}

export function SocialLinks() {
  const { t } = useTranslation('contact')
  const links = t('social.links', { returnObjects: true })
  const list = Array.isArray(links) ? links : []

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
          href={t('info.whatsapp.href')}
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
