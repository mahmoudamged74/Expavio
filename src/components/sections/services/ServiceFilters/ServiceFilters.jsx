import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './ServiceFilters.module.css'

export function ServiceFilters({ filters, activeId, onChange, resultCount }) {
  const { t } = useTranslation('services')
  const labelId = useId()

  return (
    <div className={styles.wrap}>
      <div className={styles.meta}>
        <p id={labelId} className={styles.label}>
          {t('page.filters.label')}
        </p>
        {typeof resultCount === 'number' ? (
          <p className={styles.count} aria-live="polite">
            {t('page.filters.count', { count: resultCount })}
          </p>
        ) : null}
      </div>

      <div
        className={styles.list}
        role="tablist"
        aria-labelledby={labelId}
      >
        {filters.map((filter) => {
          const isActive = filter.id === activeId

          return (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`${styles.chip} ${isActive ? styles.chipActive : ''}`}
              onClick={() => onChange(filter.id)}
            >
              {filter.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
