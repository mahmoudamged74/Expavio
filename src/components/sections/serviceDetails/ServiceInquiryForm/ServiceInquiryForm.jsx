import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from '@/components/ui/Input/Input'
import { Button } from '@/components/ui/Button/Button'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { submitContact } from '@/api/contact'
import { isValidEmail, isValidPhone } from '@/features/consultation'
import { parseApiFormErrors } from '@/lib/api/formErrors'
import { useApiLang } from '@/hooks/useApiLang'
import styles from './ServiceInquiryForm.module.css'

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
}

export function ServiceInquiryForm({ serviceId, serviceSlug, serviceTitle }) {
  const { t } = useTranslation('services')
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
    if (!String(values.name).trim()) next.name = t('details.form.validation.name')
    if (!isValidEmail(values.email)) next.email = t('details.form.validation.email')
    if (values.phone && !isValidPhone(values.phone)) {
      next.phone = t('details.form.validation.phone')
    }
    if (!String(values.message).trim()) {
      next.message = t('details.form.validation.message')
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validate()) return

    setSubmitting(true)
    setSubmitError(null)

    const company = String(values.company).trim()
    const message = String(values.message).trim()
    const messageWithCompany = company
      ? `${message}\n\n${lang === 'ar' ? 'الشركة' : 'Company'}: ${company}`
      : message

    try {
      await submitContact(
        {
          name: String(values.name).trim(),
          email: String(values.email).trim(),
          phone: String(values.phone).trim() || null,
          subject: serviceTitle || serviceSlug || null,
          message: messageWithCompany,
          service_id: Number.isFinite(Number(serviceId))
            ? Number(serviceId)
            : null,
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
        setSubmitError(parsed.message || t('details.form.submitFailed'))
      }
    } finally {
      setSubmitting(false)
    }
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
              className={styles.control}
              error={errors.name}
              required
              autoComplete="name"
            />
            <Input
              label={t('details.form.email')}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              className={styles.control}
              error={errors.email}
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
              className={styles.control}
              error={errors.phone}
              autoComplete="tel"
            />
            <Input
              label={t('details.form.company')}
              name="company"
              value={values.company}
              onChange={handleChange}
              className={styles.control}
              autoComplete="organization"
            />
          </div>
          <Input
            as="textarea"
            label={t('details.form.message')}
            name="message"
            value={values.message}
            onChange={handleChange}
            className={styles.control}
            error={errors.message}
            rows={4}
            required
          />

          {submitError ? (
            <p className={styles.submitError} role="alert">
              {submitError}
            </p>
          ) : null}

          <Button type="submit" variant="primary" size="lg" disabled={submitting}>
            {submitting ? t('details.form.submitting') : t('details.form.submit')}
          </Button>
        </form>
      )}
    </section>
  )
}
