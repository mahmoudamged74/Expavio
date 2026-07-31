import { useTranslation } from 'react-i18next'
import {
  HiUser,
  HiBuildingOffice2,
  HiGlobeAlt,
  HiBuildingLibrary,
  HiRocketLaunch,
} from 'react-icons/hi2'
import clsx from 'clsx'
import styles from './CustomerTypeStep.module.css'

const ICONS = {
  'individual-investor': HiUser,
  'saudi-company': HiBuildingOffice2,
  'foreign-company': HiGlobeAlt,
  government: HiBuildingLibrary,
  startup: HiRocketLaunch,
}

export function CustomerTypeStep({ value, onChange, error }) {
  const { t } = useTranslation('consultation')
  const options = t('customerType.options', { returnObjects: true })
  const list = Array.isArray(options) ? options : []

  return (
    <div className={styles.step}>
      <header className={styles.head}>
        <h2 className={styles.title}>{t('customerType.title')}</h2>
        <p className={styles.subtitle}>{t('customerType.subtitle')}</p>
      </header>

      <div className={styles.grid} role="radiogroup" aria-label={t('customerType.title')}>
        {list.map((option) => {
          const Icon = ICONS[option.id] ?? HiUser
          const selected = value === option.id

          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={selected}
              className={clsx(styles.card, selected && styles.selected)}
              onClick={() => onChange(option.id)}
            >
              <span className={styles.icon} aria-hidden="true">
                <Icon />
              </span>
              <span className={styles.cardTitle}>{option.title}</span>
              <span className={styles.cardText}>{option.description}</span>
            </button>
          )
        })}
      </div>

      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
