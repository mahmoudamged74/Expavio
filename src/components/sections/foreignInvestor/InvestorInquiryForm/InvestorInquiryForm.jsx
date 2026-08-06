import { useMemo, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Input } from '@/components/ui/Input/Input'
import { Button } from '@/components/ui/Button/Button'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { submitForeignInvestorInquiry } from '@/api/foreignInvestor'
import {
  CAPITAL_OPTIONS,
  HAS_EXISTING_COMPANY_OPTIONS,
  INVESTMENT_TYPE_OPTIONS,
  SERVICES_NEEDED_KEYS,
  buildForeignInvestorPayload,
  validateForeignInvestorForm,
} from '@/features/foreignInvestor/formOptions'
import { parseApiFormErrors } from '@/lib/api/formErrors'
import { useApiLang } from '@/hooks/useApiLang'
import { useForeignInvestor } from '@/hooks/useForeignInvestor'
import styles from './InvestorInquiryForm.module.css'

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  nationality: '',
  country: '',
  activity: '',
  hasCompany: '',
  investmentType: '',
  capital: '',
  notes: '',
}

export function InvestorInquiryForm() {
  const { t } = useTranslation('investor')
  const lang = useApiLang()
  const { data } = useForeignInvestor()
  const [values, setValues] = useState(INITIAL)
  const [selectedServices, setSelectedServices] = useState([])
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const serviceOptions = useMemo(() => {
    const apiItems = Array.isArray(data?.services?.items)
      ? data.services.items
      : null
    const fallbackItems = t('services.items', { returnObjects: true })
    const items =
      apiItems?.length > 0
        ? apiItems
        : Array.isArray(fallbackItems)
          ? fallbackItems
          : []

    return SERVICES_NEEDED_KEYS.map((key, index) => ({
      key,
      label: items[index]?.title || key,
    }))
  }, [data?.services?.items, t])

  const formTitle = data?.form?.title ?? t('form.title')
  const formDescription = data?.form?.description ?? t('form.subtitle')

  const clearError = (name) => {
    if (!errors[name]) return
    setErrors((prev) => {
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    clearError(name)
  }

  const toggleService = (key) => {
    setSelectedServices((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key],
    )
    clearError('services')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const invalid = validateForeignInvestorForm(values, selectedServices)
    if (invalid) {
      setErrors({ [invalid]: t(`form.validation.${invalid}`) })
      setSubmitError(t(`form.validation.${invalid}`))
      return
    }

    setSubmitting(true)
    setSubmitError(null)

    try {
      await submitForeignInvestorInquiry(
        buildForeignInvestorPayload(values, selectedServices),
        lang,
      )
      setSubmitted(true)
    } catch (error) {
      const parsed = parseApiFormErrors(error)
      const apiToForm = {
        nationality: 'nationality',
        country_of_residence: 'country',
        target_activity: 'activity',
        has_existing_company: 'hasCompany',
        investment_type: 'investmentType',
        approximate_capital: 'capital',
        services_needed: 'services',
        notes: 'notes',
        name: 'name',
        email: 'email',
        phone: 'phone',
      }
      if (parsed.firstField) {
        const mapped = {}
        for (const [apiField, msg] of Object.entries(parsed.fieldErrors)) {
          mapped[apiToForm[apiField] || apiField] = msg
        }
        setErrors(mapped)
        setSubmitError(
          mapped[apiToForm[parsed.firstField] || parsed.firstField] ||
            parsed.message,
        )
      } else {
        setSubmitError(parsed.message || t('form.submitFailed'))
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="investor-form"
      className={`section ${styles.section}`}
      aria-labelledby="investor-form-title"
    >
      <Container>
        <SectionHeading
          eyebrow={t('form.eyebrow')}
          title={formTitle}
          subtitle={formDescription}
          align="center"
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
                label={t('form.nationality')}
                name="nationality"
                value={values.nationality}
                onChange={handleChange}
                error={errors.nationality}
                required
              />
            </div>

            <div className={styles.row}>
              <Input
                label={t('form.country')}
                name="country"
                value={values.country}
                onChange={handleChange}
                autoComplete="country-name"
                error={errors.country}
                required
              />
              <Input
                label={t('form.activity')}
                name="activity"
                value={values.activity}
                onChange={handleChange}
                error={errors.activity}
                required
              />
            </div>

            <div className={styles.row}>
              <Input
                as="select"
                label={t('form.hasCompany')}
                name="hasCompany"
                value={values.hasCompany}
                onChange={handleChange}
                error={errors.hasCompany}
                required
              >
                <option value="">{t('form.selectPlaceholder')}</option>
                {HAS_EXISTING_COMPANY_OPTIONS.map((option) => (
                  <option key={option.key} value={option.key}>
                    {t(option.labelKey)}
                  </option>
                ))}
              </Input>
              <Input
                as="select"
                label={t('form.investmentType')}
                name="investmentType"
                value={values.investmentType}
                onChange={handleChange}
                error={errors.investmentType}
                required
              >
                <option value="">{t('form.selectPlaceholder')}</option>
                {INVESTMENT_TYPE_OPTIONS.map((option) => (
                  <option key={option.key} value={option.key}>
                    {t(option.labelKey)}
                  </option>
                ))}
              </Input>
            </div>

            <Input
              as="select"
              label={t('form.capital')}
              name="capital"
              value={values.capital}
              onChange={handleChange}
              error={errors.capital}
              required
            >
              <option value="">{t('form.selectPlaceholder')}</option>
              {CAPITAL_OPTIONS.map((option) => (
                <option key={option.key} value={option.key}>
                  {t(option.labelKey)}
                </option>
              ))}
            </Input>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>
                {t('form.services')}
                <span className={styles.hint}>{t('form.servicesHint')}</span>
              </legend>
              <div className={styles.options}>
                {serviceOptions.map((service) => {
                  const checked = selectedServices.includes(service.key)
                  return (
                    <label
                      key={service.key}
                      className={`${styles.option} ${checked ? styles.optionChecked : ''}`}
                    >
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                        checked={checked}
                        onChange={() => toggleService(service.key)}
                      />
                      <span>{service.label}</span>
                    </label>
                  )
                })}
              </div>
              {errors.services ? (
                <p className={styles.fieldError} role="alert">
                  {errors.services}
                </p>
              ) : null}
            </fieldset>

            <Input
              as="textarea"
              label={t('form.notes')}
              name="notes"
              value={values.notes}
              onChange={handleChange}
              rows={4}
              error={errors.notes}
            />

            {submitError ? (
              <p className={styles.submitError} role="alert">
                {submitError}
              </p>
            ) : null}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className={styles.submit}
              disabled={submitting}
            >
              {submitting ? t('form.submitting') : t('form.submit')}
            </Button>
          </form>
        )}
      </Container>
    </section>
  )
}
