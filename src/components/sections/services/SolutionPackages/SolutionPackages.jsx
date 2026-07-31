import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { getServiceIcon } from '@/features/services/icons'
import styles from './SolutionPackages.module.css'

export function SolutionPackages({ packages }) {
  const { t, i18n } = useTranslation('services')
  const Arrow = i18n.language?.startsWith('ar') ? HiArrowLeft : HiArrowRight
  const list = Array.isArray(packages) ? packages : []

  return (
    <section
      id="solution-packages"
      className={`section ${styles.section}`}
      aria-label={t('page.packages.title')}
    >
      <Container>
        <SectionHeading
          eyebrow={t('page.packages.eyebrow')}
          title={t('page.packages.title')}
          subtitle={t('page.packages.subtitle')}
          align="center"
        />

        <ul className={styles.grid}>
          {list.map((pkg, index) => {
            const Icon = getServiceIcon(pkg.icon)
            const steps = Array.isArray(pkg.steps) ? pkg.steps : []

            return (
              <li
                key={pkg.id}
                className={`${styles.card} ${styles[pkg.accent] || styles.blue}`}
                style={{ '--i': index }}
              >
                <div className={styles.cardHead}>
                  <span className={styles.iconWrap} aria-hidden="true">
                    <Icon />
                  </span>
                  <h3 className={styles.cardTitle}>{pkg.title}</h3>
                  <p className={styles.cardDesc}>{pkg.description}</p>
                </div>

                <ol className={styles.steps}>
                  {steps.map((step, stepIndex) => (
                    <li key={step} className={styles.step}>
                      <span className={styles.stepIndex} aria-hidden="true">
                        {String(stepIndex + 1).padStart(2, '0')}
                      </span>
                      <span className={styles.stepLabel}>{step}</span>
                    </li>
                  ))}
                </ol>

                <Link to={`/services/${pkg.ctaSlug}`} className={styles.cta}>
                  {t('page.packages.cta')}
                  <Arrow aria-hidden="true" />
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
