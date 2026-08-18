import { useEffect, useId, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { HiArrowLeft, HiArrowRight, HiChevronDown } from 'react-icons/hi2'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { getServiceIcon } from '@/features/services/icons'
import { useServiceCatalog } from '@/hooks/useServiceCatalog'
import styles from './ServicesSection.module.css'

export function ServicesSection() {
  const { t, i18n } = useTranslation('home')
  const { t: tc } = useTranslation('common')
  const { groups } = useServiceCatalog()
  const [activeId, setActiveId] = useState(null)
  const panelId = useId()
  const isRtl = i18n.language?.startsWith('ar')
  const Arrow = isRtl ? HiArrowLeft : HiArrowRight

  useEffect(() => {
    if (!groups.length) return
    setActiveId((prev) =>
      groups.some((group) => group.id === prev) ? prev : groups[0].id,
    )
  }, [groups])

  const activeGroup = groups.find((group) => group.id === activeId) ?? groups[0]

  const toggleGroup = (id) => {
    setActiveId((prev) => (prev === id ? null : id))
  }

  return (
    <section className={`section ${styles.section}`} aria-label={t('services.title')}>
      <Container>
        <SectionHeading
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
          align="center"
        />

        <Row className={`g-3 g-lg-4 ${styles.pillars}`}>
          {groups.map((group, index) => {
            const Icon = getServiceIcon(group.icon)
            const isActive = activeId === group.id

            return (
              <Col key={group.id} xs={6} lg={3}>
                <button
                  type="button"
                  className={`${styles.pillar} ${isActive ? styles.pillarActive : ''}`}
                  onClick={() => toggleGroup(group.id)}
                  aria-expanded={isActive}
                  aria-controls={panelId}
                  style={{ '--i': index }}
                >
                  <span className={styles.pillarIndex}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.iconWrap} aria-hidden="true">
                    <Icon className={styles.icon} />
                  </span>
                  <h3 className={styles.pillarTitle}>{group.title}</h3>
                  <p className={styles.pillarDesc}>{group.description}</p>
                  <span className={styles.pillarAction}>
                    {isActive ? t('services.closeServices') : t('services.openServices')}
                    <HiChevronDown
                      className={`${styles.chevron} ${isActive ? styles.chevronOpen : ''}`}
                      aria-hidden="true"
                    />
                  </span>
                </button>
              </Col>
            )
          })}
        </Row>

        <div
          id={panelId}
          className={`${styles.panel} ${activeGroup && activeId ? styles.panelOpen : ''}`}
          hidden={!activeId || !activeGroup}
        >
          {activeGroup ? (
            <>
              <div className={styles.panelHead}>
                <div>
                  <p className={styles.panelEyebrow}>{activeGroup.title}</p>
                  <p className={styles.panelLead}>{activeGroup.description}</p>
                </div>
                <Link to="/services" className={styles.viewAll}>
                  {tc('actions.viewAll')}
                  <Arrow aria-hidden="true" />
                </Link>
              </div>

              <ul className={styles.serviceList}>
                {activeGroup.services.map((service) => {
                  const Icon = getServiceIcon(service.icon)

                  return (
                    <li key={service.slug}>
                      <Link to={`/services/${service.slug}`} className={styles.serviceLink}>
                        <span className={styles.serviceIcon} aria-hidden="true">
                          <Icon />
                        </span>
                        <span className={styles.serviceCopy}>
                          <span className={styles.serviceTitle}>{service.title}</span>
                          <span className={styles.serviceHint}>{t('services.viewService')}</span>
                        </span>
                        <Arrow className={styles.serviceArrow} aria-hidden="true" />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
