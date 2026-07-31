import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { getServiceIcon } from '@/features/services/icons'
import styles from './ServiceSelectionStep.module.css'

export function ServiceSelectionStep({ value, services = [], onChange, error }) {
  const { t } = useTranslation('consultation')
  const unsureId = 'unsure'

  return (
    <div className={styles.step}>
      <header className={styles.head}>
        <h2 className={styles.title}>{t('serviceSelection.title')}</h2>
        <p className={styles.subtitle}>{t('serviceSelection.subtitle')}</p>
      </header>

      <div className={styles.grid} role="radiogroup" aria-label={t('serviceSelection.title')}>
        {services.map((service) => {
          const Icon = getServiceIcon(service.icon)
          const selected = value === service.slug

          return (
            <button
              key={service.slug}
              type="button"
              role="radio"
              aria-checked={selected}
              className={clsx(styles.card, selected && styles.selected)}
              onClick={() => onChange(service.slug)}
            >
              <span className={styles.icon} aria-hidden="true">
                <Icon />
              </span>
              <span className={styles.cardTitle}>{service.title}</span>
              <span className={styles.cardText}>{service.shortDescription}</span>
            </button>
          )
        })}

        <button
          type="button"
          role="radio"
          aria-checked={value === unsureId}
          className={clsx(styles.card, styles.unsure, value === unsureId && styles.selected)}
          onClick={() => onChange(unsureId)}
        >
          <span className={styles.cardTitle}>{t('serviceSelection.unsure')}</span>
        </button>
      </div>

      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
