import { useTranslation } from 'react-i18next'
import { FaWhatsapp } from 'react-icons/fa6'
import styles from './FloatingWhatsApp.module.css'

export function FloatingWhatsApp() {
  const { t } = useTranslation('contact')
  const href = t('info.whatsapp.href')
  const label = t('info.whatsapp.label')

  return (
    <a
      href={href}
      className={styles.fab}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      <span className={styles.pulse} aria-hidden="true" />
      <FaWhatsapp className={styles.icon} aria-hidden="true" />
      <span className={styles.label}>{label}</span>
    </a>
  )
}
