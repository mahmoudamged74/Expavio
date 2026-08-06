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
  buildConsultationApiPayload,
  parseConsultationApiErrors,
  validateConsultationStep,
} from '@/features/consultation'
import { submitConsultation } from '@/api/consultations'
import { useApiLang } from '@/hooks/useApiLang'
import { useConsultationFormOptions } from '@/hooks/useConsultationFormOptions'
import { useServiceCatalog } from '@/hooks/useServiceCatalog'
import styles from './MultiStepForm.module.css'

export function MultiStepForm() {
  const { t } = useTranslation('consultation')
  const lang = useApiLang()
  const [step, setStep] = useState(1)
  const [values, setValues] = useState(INITIAL_CONSULTATION_VALUES)
  const [errorKey, setErrorKey] = useState(null)
  const [fieldErrorMap, setFieldErrorMap] = useState({})
  const [submitError, setSubmitError] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [referenceId, setReferenceId] = useState('')
  const { services } = useServiceCatalog()
  const {
    clientTypes,
    projectStages,
    preferredContactTimes,
    needsGuidanceOption,
  } = useConsultationFormOptions()

  const summaryLabels = useMemo(() => {
    const customer = clientTypes.find((item) => item.key === values.customerType)
    const stage = projectStages.find((item) => item.key === values.stage)
    const preferredTime = preferredContactTimes.find(
      (item) => item.key === values.preferredTime,
    )
    const service =
      values.serviceSlug === 'unsure'
        ? needsGuidanceOption.label
        : services.find((item) => item.slug === values.serviceSlug)?.title

    return {
      customerType: customer?.label ?? '',
      service: service ?? '',
      stage: stage?.label ?? '',
      preferredTime: preferredTime?.label ?? '',
    }
  }, [
    clientTypes,
    needsGuidanceOption.label,
    preferredContactTimes,
    projectStages,
    services,
    values.customerType,
    values.preferredTime,
    values.serviceSlug,
    values.stage,
  ])

  const fieldErrors = {
    activity:
      errorKey === 'activity'
        ? t('validation.activity')
        : fieldErrorMap.activity,
    stage:
      errorKey === 'stage' ? t('validation.stage') : fieldErrorMap.stage,
    city: errorKey === 'city' ? t('validation.city') : fieldErrorMap.city,
    need: errorKey === 'need' ? t('validation.need') : fieldErrorMap.need,
    name: errorKey === 'name' ? t('validation.name') : fieldErrorMap.name,
    phone: errorKey === 'phone' ? t('validation.phone') : fieldErrorMap.phone,
    email: errorKey === 'email' ? t('validation.email') : fieldErrorMap.email,
    preferredTime:
      errorKey === 'preferredTime'
        ? t('validation.preferredTime')
        : fieldErrorMap.preferredTime,
  }

  const stepError =
    errorKey === 'customerType'
      ? t('validation.customerType')
      : errorKey === 'service'
        ? t('validation.service')
        : null

  const clearFieldError = (name) => {
    if (errorKey === name) setErrorKey(null)
    if (fieldErrorMap[name]) {
      setFieldErrorMap((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleFieldChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    clearFieldError(name)
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
    setSubmitError(null)
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const goToStep = (target) => {
    setErrorKey(null)
    setSubmitError(null)
    setStep(target)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (step < TOTAL_STEPS) {
      goNext()
      return
    }

    for (const checkStep of [3, 4]) {
      const invalid = validateConsultationStep(checkStep, values)
      if (invalid) {
        setErrorKey(invalid)
        setStep(checkStep)
        setSubmitError(t(`validation.${invalid}`))
        return
      }
    }

    if (values.serviceSlug !== 'unsure') {
      const selected = services.find((item) => item.slug === values.serviceSlug)
      if (!selected?.id) {
        setSubmitError(t('validation.submitFailed'))
        return
      }
    }

    setSubmitting(true)
    setSubmitError(null)
    setFieldErrorMap({})

    try {
      const payload = buildConsultationApiPayload(values, { services })
      const response = await submitConsultation(payload, lang)
      const id = response?.data?.id
      setReferenceId(id ? `EXP-${id}` : '')
      setSubmitted(true)
    } catch (error) {
      const parsed = parseConsultationApiErrors(error)
      if (parsed.firstField) {
        setFieldErrorMap(parsed.fieldErrors)
        setErrorKey(parsed.firstField)
        if (parsed.step) setStep(parsed.step)
        setSubmitError(
          parsed.fieldErrors[parsed.firstField] ||
            parsed.message ||
            t('validation.submitFailed'),
        )
      } else {
        setSubmitError(parsed.message || t('validation.submitFailed'))
      }
    } finally {
      setSubmitting(false)
    }
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
            options={clientTypes}
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
            unsureLabel={needsGuidanceOption.label}
            unsureDescription={needsGuidanceOption.description}
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
            stages={projectStages}
            onChange={handleFieldChange}
            errors={fieldErrors}
          />
        )}

        {step === 4 && (
          <ContactDetailsStep
            values={values}
            timeOptions={preferredContactTimes}
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

      {submitError ? (
        <p className={styles.submitError} role="alert">
          {submitError}
        </p>
      ) : null}

      <div className={styles.actions}>
        {step > 1 ? (
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={goBack}
            disabled={submitting}
          >
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
          <Button type="submit" variant="primary" size="lg" disabled={submitting}>
            {submitting ? t('nav.submitting') : t('nav.submit')}
          </Button>
        )}
      </div>
    </form>
  )
}
