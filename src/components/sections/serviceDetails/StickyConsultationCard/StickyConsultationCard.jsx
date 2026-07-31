import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button/Button'
import { getServiceIcon } from '@/features/services/icons'
import styles from './StickyConsultationCard.module.css'

export function StickyConsultationCard({ service }) {
  const { t } = useTranslation('services')
  const Icon = getServiceIcon(service.icon)

  return (
    <aside className={styles.card} aria-label={t('details.sticky.title')}>
      <span className={styles.icon} aria-hidden="true">
        <Icon />
      </span>
      <h2 className={styles.title}>{t('details.sticky.title')}</h2>
      <p className={styles.subtitle}>{t('details.sticky.subtitle')}</p>
      <div className={styles.actions}>
        <Button to="/consultation" variant="primary" size="lg" className={styles.full}>
          {t('details.sticky.primaryCta')}
        </Button>
        <Button href="#service-inquiry" variant="outline" size="md" className={styles.full}>
          {t('details.sticky.secondaryCta')}
        </Button>
      </div>
      <p className={styles.hint}>{t('details.sticky.hint')}</p>
    </aside>
  )
}
