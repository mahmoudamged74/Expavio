import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from '@/components/ui/Input/Input'
import { Button } from '@/components/ui/Button/Button'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import styles from './ContactForm.module.css'

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export function ContactForm() {
  const { t } = useTranslation('contact')
  const [values, setValues] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className={styles.section} aria-labelledby="contact-form-title">
      <SectionHeading
        eyebrow={t('form.eyebrow')}
        title={t('form.title')}
        subtitle={t('form.subtitle')}
        className={styles.heading}
      />

      {submitted ? (
        <p className={styles.success} role="status">
          {t('form.success')}
        </p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <Input
              label={t('form.name')}
              name="name"
              value={values.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
            <Input
              label={t('form.email')}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className={styles.row}>
            <Input
              label={t('form.phone')}
              name="phone"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              autoComplete="tel"
            />
            <Input
              label={t('form.subject')}
              name="subject"
              value={values.subject}
              onChange={handleChange}
            />
          </div>

          <Input
            as="textarea"
            label={t('form.message')}
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={5}
            required
          />

          <Button type="submit" variant="primary" size="lg">
            {t('form.submit')}
          </Button>
        </form>
      )}
    </section>
  )
}
