import { useTranslation } from 'react-i18next'
import { Input } from '@/components/ui/Input/Input'
import styles from './ProjectDetailsStep.module.css'

export function ProjectDetailsStep({
  values,
  onChange,
  errors = {},
  stages = [],
}) {
  const { t } = useTranslation('consultation')

  return (
    <div className={styles.step}>
      <header className={styles.head}>
        <h2 className={styles.title}>{t('projectDetails.title')}</h2>
        <p className={styles.subtitle}>{t('projectDetails.subtitle')}</p>
      </header>

      <div className={styles.fields}>
        <div className={styles.row}>
          <Input
            label={t('projectDetails.activity')}
            name="activity"
            value={values.activity}
            onChange={onChange}
            placeholder={t('projectDetails.activityPlaceholder')}
            error={errors.activity}
            required
          />
          <Input
            as="select"
            label={t('projectDetails.stage')}
            name="stage"
            value={values.stage}
            onChange={onChange}
            error={errors.stage}
            required
          >
            <option value="">{t('projectDetails.stagePlaceholder')}</option>
            {stages.map((stage) => (
              <option key={stage.key} value={stage.key}>
                {stage.label}
              </option>
            ))}
          </Input>
        </div>

        <Input
          label={t('projectDetails.city')}
          name="city"
          value={values.city}
          onChange={onChange}
          placeholder={t('projectDetails.cityPlaceholder')}
          error={errors.city}
          required
        />

        <Input
          as="textarea"
          label={t('projectDetails.need')}
          name="need"
          value={values.need}
          onChange={onChange}
          placeholder={t('projectDetails.needPlaceholder')}
          rows={5}
          error={errors.need}
          required
        />
      </div>
    </div>
  )
}
