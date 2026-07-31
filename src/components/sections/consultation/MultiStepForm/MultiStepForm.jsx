import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button/Button'
import { FormProgress } from '@/components/sections/consultation/FormProgress/FormProgress'
import { CustomerTypeStep } from '@/components/sections/consultation/CustomerTypeStep/CustomerTypeStep'
import { ServiceSelectionStep } from '@/components/sections/consultation/ServiceSelectionStep/ServiceSelectionStep'
import { ProjectDetailsStep } from '@/components/sections/consultation/ProjectDetailsStep/ProjectDetailsStep'
import { ContactDetailsStep } from '@/components/sections/consultation/ContactDetailsStep/ContactDetailsStep'
import { FormSummary } from '@/components/sections/consultation/FormSummary/FormSummary'
import { SuccessState } from '@/components/sections/consultation/SuccessState/SuccessState'
import {
  TOTAL_STEPS,
  INITIAL_CONSULTATION_VALUES,
  buildConsultationPayload,
  validateConsultationStep,
} from '@/features/consultation'
import { getLocalizedServices } from '@/features/services'
import styles from './MultiStepForm.module.css'

export function MultiStepForm() {
  const { t, i18n } = useTranslation('consultation')
  const [step, setStep] = useState(1)
  const [values, setValues] = useState(INITIAL_CONSULTATION_VALUES)
  const [errorKey, setErrorKey] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [referenceId, setReferenceId] = useState('')

  const services = useMemo(
    () => getLocalizedServices(i18n.language),
    [i18n.language],
  )

  const customerOptions = t('customerType.options', { returnObjects: true })
  const customerList = Array.isArray(customerOptions) ? customerOptions : []

  const summaryLabels = useMemo(() => {
    const customer = customerList.find((item) => item.id === values.customerType)
    const service =
      values.serviceSlug === 'unsure'
        ? t('serviceSelection.unsure')
        : services.find((item) => item.slug === values.serviceSlug)?.title

    return {
      customerType: customer?.title ?? '',
      service: service ?? '',
    }
  }, [customerList, services, values.customerType, values.serviceSlug, t])

  const fieldErrors = {
    activity: errorKey === 'activity' ? t('validation.activity') : undefined,
    need: errorKey === 'need' ? t('validation.need') : undefined,
    name: errorKey === 'name' ? t('validation.name') : undefined,
    phone: errorKey === 'phone' ? t('validation.phone') : undefined,
    email: errorKey === 'email' ? t('validation.email') : undefined,
  }

  const stepError =
    errorKey === 'customerType'
      ? t('validation.customerType')
      : errorKey === 'service'
        ? t('validation.service')
        : null

  const handleFieldChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errorKey === name) setErrorKey(null)
  }

  const goNext = () => {
    const invalid = validateConsultationStep(step, values)
    if (invalid) {
      setErrorKey(invalid)
      return
    }
    setErrorKey(null)
    setStep((prev) => Math.min(prev + 1, TOTAL_STEPS))
  }

  const goBack = () => {
    setErrorKey(null)
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const goToStep = (target) => {
    setErrorKey(null)
    setStep(target)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (step < TOTAL_STEPS) {
      goNext()
      return
    }

    buildConsultationPayload(values, {
      source: 'consultation-multi-step',
      serviceTitle: summaryLabels.service || null,
    })
    setReferenceId(`EXP-${String(Date.now()).slice(-8)}`)
    setSubmitted(true)
  }

  if (submitted) {
    return <SuccessState referenceId={referenceId} />
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <FormProgress currentStep={step} totalSteps={TOTAL_STEPS} />

      <div className={styles.body} key={step}>
        {step === 1 && (
          <CustomerTypeStep
            value={values.customerType}
            error={stepError}
            onChange={(customerType) => {
              setValues((prev) => ({ ...prev, customerType }))
              setErrorKey(null)
            }}
          />
        )}

        {step === 2 && (
          <ServiceSelectionStep
            value={values.serviceSlug}
            services={services}
            error={stepError}
            onChange={(serviceSlug) => {
              setValues((prev) => ({ ...prev, serviceSlug }))
              setErrorKey(null)
            }}
          />
        )}

        {step === 3 && (
          <ProjectDetailsStep
            values={values}
            onChange={handleFieldChange}
            errors={fieldErrors}
          />
        )}

        {step === 4 && (
          <ContactDetailsStep
            values={values}
            onChange={handleFieldChange}
            errors={fieldErrors}
          />
        )}

        {step === 5 && (
          <FormSummary
            values={values}
            labels={summaryLabels}
            onEdit={goToStep}
          />
        )}
      </div>

      <div className={styles.actions}>
        {step > 1 ? (
          <Button type="button" variant="outline" size="lg" onClick={goBack}>
            {t('nav.back')}
          </Button>
        ) : (
          <span />
        )}

        {step < TOTAL_STEPS ? (
          <Button type="button" variant="primary" size="lg" onClick={goNext}>
            {t('nav.next')}
          </Button>
        ) : (
          <Button type="submit" variant="primary" size="lg">
            {t('nav.submit')}
          </Button>
        )}
      </div>
    </form>
  )
}
