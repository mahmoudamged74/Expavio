import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Input } from '@/components/ui/Input/Input'
import { Button } from '@/components/ui/Button/Button'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { buildConsultationPayload } from '@/features/consultation'
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
  const [values, setValues] = useState(INITIAL)
  const [selectedServices, setSelectedServices] = useState([])
  const [submitted, setSubmitted] = useState(false)

  const toArray = (key) => {
    const value = t(key, { returnObjects: true })
    return Array.isArray(value) ? value : []
  }

  const hasCompanyOptions = toArray('form.hasCompanyOptions')
  const investmentTypeOptions = toArray('form.investmentTypeOptions')
  const capitalOptions = toArray('form.capitalOptions')
  const serviceOptions = toArray('services.items').map((item) => item.title)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((item) => item !== service) : [...prev, service],
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    buildConsultationPayload(
      { ...values, services: selectedServices },
      { source: 'foreign-investor-landing' },
    )
    setSubmitted(true)
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
          title={t('form.title')}
          subtitle={t('form.subtitle')}
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
                label={t('form.nationality')}
                name="nationality"
                value={values.nationality}
                onChange={handleChange}
              />
            </div>

            <div className={styles.row}>
              <Input
                label={t('form.country')}
                name="country"
                value={values.country}
                onChange={handleChange}
                autoComplete="country-name"
              />
              <Input
                label={t('form.activity')}
                name="activity"
                value={values.activity}
                onChange={handleChange}
              />
            </div>

            <div className={styles.row}>
              <Input
                as="select"
                label={t('form.hasCompany')}
                name="hasCompany"
                value={values.hasCompany}
                onChange={handleChange}
              >
                <option value="">{t('form.selectPlaceholder')}</option>
                {hasCompanyOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Input>
              <Input
                as="select"
                label={t('form.investmentType')}
                name="investmentType"
                value={values.investmentType}
                onChange={handleChange}
              >
                <option value="">{t('form.selectPlaceholder')}</option>
                {investmentTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
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
            >
              <option value="">{t('form.selectPlaceholder')}</option>
              {capitalOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
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
                  const checked = selectedServices.includes(service)
                  return (
                    <label
                      key={service}
                      className={`${styles.option} ${checked ? styles.optionChecked : ''}`}
                    >
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                        checked={checked}
                        onChange={() => toggleService(service)}
                      />
                      <span>{service}</span>
                    </label>
                  )
                })}
              </div>
            </fieldset>

            <Input
              as="textarea"
              label={t('form.notes')}
              name="notes"
              value={values.notes}
              onChange={handleChange}
              rows={4}
            />

            <Button type="submit" variant="primary" size="lg" className={styles.submit}>
              {t('form.submit')}
            </Button>
          </form>
        )}
      </Container>
    </section>
  )
}
