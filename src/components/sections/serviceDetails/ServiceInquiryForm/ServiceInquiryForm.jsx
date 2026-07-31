import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from '@/components/ui/Input/Input'
import { Button } from '@/components/ui/Button/Button'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { buildConsultationPayload } from '@/features/consultation'
import styles from './ServiceInquiryForm.module.css'

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
}

export function ServiceInquiryForm({ serviceSlug, serviceTitle }) {
  const { t } = useTranslation('services')
  const [values, setValues] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    buildConsultationPayload(values, {
      source: 'service-details',
      serviceSlug,
      serviceTitle,
    })
    setSubmitted(true)
  }

  return (
    <section
      id="service-inquiry"
      className={styles.section}
      aria-labelledby="service-inquiry-title"
    >
      <SectionHeading
        eyebrow={t('details.form.eyebrow')}
        title={t('details.form.title')}
        subtitle={t('details.form.subtitle')}
        className={styles.heading}
      />

      {submitted ? (
        <p className={styles.success} role="status">
          {t('details.form.success')}
        </p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <Input
              label={t('details.form.name')}
              name="name"
              value={values.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
            <Input
              label={t('details.form.email')}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <div className={styles.row}>
            <Input
              label={t('details.form.phone')}
              name="phone"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              autoComplete="tel"
            />
            <Input
              label={t('details.form.company')}
              name="company"
              value={values.company}
              onChange={handleChange}
              autoComplete="organization"
            />
          </div>
          <Input
            as="textarea"
            label={t('details.form.message')}
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={4}
          />
          <Button type="submit" variant="primary" size="lg">
            {t('details.form.submit')}
          </Button>
        </form>
      )}
    </section>
  )
}
