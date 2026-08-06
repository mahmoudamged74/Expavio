import {
  HiUser,
  HiBuildingOffice2,
  HiGlobeAlt,
  HiBuildingLibrary,
  HiRocketLaunch,
} from 'react-icons/hi2'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import styles from './CustomerTypeStep.module.css'

const ICONS = {
  individual_investor: HiUser,
  saudi_company: HiBuildingOffice2,
  foreign_company: HiGlobeAlt,
  government_entity: HiBuildingLibrary,
  startup: HiRocketLaunch,
}

export function CustomerTypeStep({ value, onChange, error, options = [] }) {
  const { t } = useTranslation('consultation')

  return (
    <div className={styles.step}>
      <header className={styles.head}>
        <h2 className={styles.title}>{t('customerType.title')}</h2>
        <p className={styles.subtitle}>{t('customerType.subtitle')}</p>
      </header>

      <div className={styles.grid} role="radiogroup" aria-label={t('customerType.title')}>
        {options.map((option) => {
          const Icon = ICONS[option.key] ?? HiUser
          const selected = value === option.key

          return (
            <button
              key={option.key}
              type="button"
              role="radio"
              aria-checked={selected}
              className={clsx(styles.card, selected && styles.selected)}
              onClick={() => onChange(option.key)}
            >
              <span className={styles.icon} aria-hidden="true">
                <Icon />
              </span>
              <span className={styles.cardTitle}>{option.label}</span>
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
