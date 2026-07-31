import { useTranslation } from 'react-i18next'
import { Input } from '@/components/ui/Input/Input'
import styles from './ContactDetailsStep.module.css'

export function ContactDetailsStep({ values, onChange, errors = {} }) {
  const { t } = useTranslation('consultation')
  const times = t('contactDetails.timeOptions', { returnObjects: true })
  const timeList = Array.isArray(times) ? times : []

  return (
    <div className={styles.step}>
      <header className={styles.head}>
        <h2 className={styles.title}>{t('contactDetails.title')}</h2>
        <p className={styles.subtitle}>{t('contactDetails.subtitle')}</p>
      </header>

      <div className={styles.fields}>
        <div className={styles.row}>
          <Input
            label={t('contactDetails.name')}
            name="name"
            value={values.name}
            onChange={onChange}
            autoComplete="name"
            error={errors.name}
            required
          />
          <Input
            label={t('contactDetails.phone')}
            name="phone"
            type="tel"
            value={values.phone}
            onChange={onChange}
            autoComplete="tel"
            error={errors.phone}
            required
          />
        </div>

        <div className={styles.row}>
          <Input
            label={t('contactDetails.email')}
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            autoComplete="email"
            error={errors.email}
            required
          />
          <Input
            label={t('contactDetails.company')}
            name="company"
            value={values.company}
            onChange={onChange}
            autoComplete="organization"
          />
        </div>

        <Input
          as="select"
          label={t('contactDetails.preferredTime')}
          name="preferredTime"
          value={values.preferredTime}
          onChange={onChange}
        >
          <option value="">{t('contactDetails.preferredTimePlaceholder')}</option>
          {timeList.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Input>
      </div>
    </div>
  )
}
