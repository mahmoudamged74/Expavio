import { useTranslation } from 'react-i18next'
import { HiCheckCircle } from 'react-icons/hi2'
import { Button } from '@/components/ui/Button/Button'
import styles from './SuccessState.module.css'

export function SuccessState({ referenceId }) {
  const { t } = useTranslation('consultation')

  return (
    <div className={styles.wrap} role="status">
      <span className={styles.icon} aria-hidden="true">
        <HiCheckCircle />
      </span>
      <h2 className={`font-display ${styles.title}`}>{t('success.title')}</h2>
      <p className={styles.description}>{t('success.description')}</p>

      {referenceId ? (
        <p className={styles.ref}>
          <span>{t('success.refLabel')}</span>
          <strong>{referenceId}</strong>
        </p>
      ) : null}

      <div className={styles.actions}>
        <Button to="/" variant="primary" size="lg">
          {t('success.primaryCta')}
        </Button>
        <Button to="/services" variant="outline" size="lg">
          {t('success.secondaryCta')}
        </Button>
      </div>
    </div>
  )
}
