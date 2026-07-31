import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button/Button'
import styles from './FormSummary.module.css'

export function FormSummary({ values, labels, onEdit }) {
  const { t } = useTranslation('consultation')
  const empty = t('summary.empty')

  const rows = [
    { key: 'customerType', label: t('summary.customerType'), value: labels.customerType, step: 1 },
    { key: 'service', label: t('summary.service'), value: labels.service, step: 2 },
    { key: 'activity', label: t('summary.activity'), value: values.activity, step: 3 },
    { key: 'stage', label: t('summary.stage'), value: values.stage, step: 3 },
    { key: 'city', label: t('summary.city'), value: values.city, step: 3 },
    { key: 'need', label: t('summary.need'), value: values.need, step: 3 },
    { key: 'name', label: t('summary.name'), value: values.name, step: 4 },
    { key: 'phone', label: t('summary.phone'), value: values.phone, step: 4 },
    { key: 'email', label: t('summary.email'), value: values.email, step: 4 },
    { key: 'company', label: t('summary.company'), value: values.company, step: 4 },
    {
      key: 'preferredTime',
      label: t('summary.preferredTime'),
      value: values.preferredTime,
      step: 4,
    },
  ]

  return (
    <div className={styles.step}>
      <header className={styles.head}>
        <h2 className={styles.title}>{t('summary.title')}</h2>
        <p className={styles.subtitle}>{t('summary.subtitle')}</p>
      </header>

      <dl className={styles.list}>
        {rows.map((row) => (
          <div key={row.key} className={styles.row}>
            <div className={styles.meta}>
              <dt className={styles.label}>{row.label}</dt>
              <dd className={styles.value}>{row.value?.trim() ? row.value : empty}</dd>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className={styles.edit}
              onClick={() => onEdit(row.step)}
            >
              {t('nav.edit')}
            </Button>
          </div>
        ))}
      </dl>
    </div>
  )
}
