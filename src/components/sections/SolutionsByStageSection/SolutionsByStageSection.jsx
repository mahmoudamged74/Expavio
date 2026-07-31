import { useId, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { audienceProfiles, getAudienceById } from '@/data/audiences'
import { getServiceBySlug, getLocalizedService } from '@/features/services'
import { getServiceIcon } from '@/features/services/icons'
import styles from './SolutionsByStageSection.module.css'

export function SolutionsByStageSection() {
  const { t, i18n } = useTranslation('home')
  const panelId = useId()
  const isRtl = i18n.language?.startsWith('ar')
  const Arrow = isRtl ? HiArrowLeft : HiArrowRight

  const labels = t('solutionsByStage.profiles', { returnObjects: true })
  const labelMap = labels && typeof labels === 'object' ? labels : {}

  const [activeId, setActiveId] = useState(audienceProfiles[0]?.id ?? null)
  const active = getAudienceById(activeId)

  const activeServices = (active?.services ?? [])
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean)
    .map((service) => getLocalizedService(service, i18n.language))

  return (
    <section className={`section ${styles.section}`} aria-labelledby="solutions-stage-title">
      <Container>
        <SectionHeading
          eyebrow={t('solutionsByStage.eyebrow')}
          title={t('solutionsByStage.title')}
          subtitle={t('solutionsByStage.subtitle')}
          align="center"
        />

        <div className={styles.chooser} role="tablist" aria-label={t('solutionsByStage.title')}>
          {audienceProfiles.map((profile, index) => {
            const Icon = getServiceIcon(profile.icon)
            const isActive = profile.id === activeId
            const label = labelMap[profile.id] || profile.id

            return (
              <button
                key={profile.id}
                type="button"
                role="tab"
                id={`${panelId}-tab-${profile.id}`}
                aria-selected={isActive}
                aria-controls={panelId}
                className={`${styles.chip} ${isActive ? styles.chipActive : ''}`}
                onClick={() => setActiveId(profile.id)}
                style={{ '--i': index }}
              >
                <span className={styles.chipIcon} aria-hidden="true">
                  <Icon />
                </span>
                <span className={styles.chipLabel}>{label}</span>
              </button>
            )
          })}
        </div>

        <div
          id={panelId}
          role="tabpanel"
          aria-labelledby={`${panelId}-tab-${activeId}`}
          className={styles.panel}
        >
          <div className={styles.panelHead}>
            <p className={styles.panelEyebrow}>{t('solutionsByStage.matched')}</p>
            <h3 className={styles.panelTitle}>{labelMap[activeId] || ''}</h3>
          </div>

          <ul className={styles.list}>
            {activeServices.map((service) => {
              const Icon = getServiceIcon(service.icon)

              return (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className={styles.service}>
                    <span className={styles.serviceIcon} aria-hidden="true">
                      <Icon />
                    </span>
                    <span className={styles.serviceCopy}>
                      <span className={styles.serviceTitle}>{service.title}</span>
                      <span className={styles.serviceDesc}>{service.shortDescription}</span>
                    </span>
                    <span className={styles.serviceCta}>
                      {t('solutionsByStage.viewService')}
                      <Arrow aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </section>
  )
}
