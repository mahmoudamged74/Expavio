import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import styles from './FormProgress.module.css'

export function FormProgress({ currentStep, totalSteps }) {
  const { t } = useTranslation('consultation')
  const labels = t('progress.labels', { returnObjects: true })
  const labelList = Array.isArray(labels) ? labels : []

  return (
    <div className={styles.wrap}>
      <p className={styles.meta}>
        {t('progress.step', { current: currentStep, total: totalSteps })}
      </p>

      <ol className={styles.list} aria-label={t('progress.step', { current: currentStep, total: totalSteps })}>
        {labelList.map((label, index) => {
          const step = index + 1
          const done = step < currentStep
          const active = step === currentStep

          return (
            <li
              key={label}
              className={clsx(styles.item, done && styles.done, active && styles.active)}
              aria-current={active ? 'step' : undefined}
            >
              <span className={styles.index} aria-hidden="true">
                {done ? '✓' : String(step).padStart(2, '0')}
              </span>
              <span className={styles.label}>{label}</span>
            </li>
          )
        })}
      </ol>

      <div
        className={styles.bar}
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={totalSteps}
        aria-valuenow={currentStep}
      >
        <span
          className={styles.fill}
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        />
      </div>
    </div>
  )
}
