import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from '@/components/ui/Input/Input'
import { Button } from '@/components/ui/Button/Button'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { submitContact } from '@/api/contact'
import { isValidEmail } from '@/features/consultation'
import { parseApiFormErrors } from '@/lib/api/formErrors'
import { useApiLang } from '@/hooks/useApiLang'
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
  const lang = useApiLang()
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const validate = () => {
    const next = {}
    if (!String(values.name).trim()) next.name = t('form.validation.name')
    if (!isValidEmail(values.email)) next.email = t('form.validation.email')
    if (!String(values.message).trim()) next.message = t('form.validation.message')
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validate()) return

    setSubmitting(true)
    setSubmitError(null)

    try {
      await submitContact(
        {
          name: String(values.name).trim(),
          email: String(values.email).trim(),
          phone: String(values.phone).trim() || null,
          subject: String(values.subject).trim() || null,
          message: String(values.message).trim(),
        },
        lang,
      )
      setSubmitted(true)
    } catch (error) {
      const parsed = parseApiFormErrors(error)
      if (parsed.firstField) {
        const mapped = {}
        for (const [key, msg] of Object.entries(parsed.fieldErrors)) {
          mapped[key] = msg
        }
        setErrors(mapped)
        setSubmitError(parsed.fieldErrors[parsed.firstField] || parsed.message)
      } else {
        setSubmitError(parsed.message || t('form.submitFailed'))
      }
    } finally {
      setSubmitting(false)
    }
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
              error={errors.name}
              required
            />
            <Input
              label={t('form.email')}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              autoComplete="email"
              error={errors.email}
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
              error={errors.phone}
            />
            <Input
              label={t('form.subject')}
              name="subject"
              value={values.subject}
              onChange={handleChange}
              error={errors.subject}
            />
          </div>

          <Input
            as="textarea"
            label={t('form.message')}
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={5}
            error={errors.message}
            required
          />

          {submitError ? (
            <p className={styles.submitError} role="alert">
              {submitError}
            </p>
          ) : null}

          <Button type="submit" variant="primary" size="lg" disabled={submitting}>
            {submitting ? t('form.submitting') : t('form.submit')}
          </Button>
        </form>
      )}
    </section>
  )
}
