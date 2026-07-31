import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import styles from './InvestorJourney.module.css'

export function InvestorJourney() {
  const { t } = useTranslation('investor')
  const steps = t('journey.steps', { returnObjects: true })
  const list = Array.isArray(steps) ? steps : []

  return (
    <section
      className={styles.section}
      aria-labelledby="investor-journey-title"
      style={{ backgroundImage: 'url(/assets/investor-journey.webp)' }}
    >
      <div className={styles.scrim} aria-hidden="true" />

      <Container className={styles.container}>
        <div className={styles.head}>
          <p className={styles.eyebrow}>{t('journey.eyebrow')}</p>
          <h2 id="investor-journey-title" className={`font-display ${styles.title}`}>
            {t('journey.title')}
          </h2>
          <p className={styles.subtitle}>{t('journey.subtitle')}</p>
        </div>

        <ol className={styles.steps}>
          {list.map((step, index) => (
            <li key={step.title} className={styles.step} style={{ '--i': index }}>
              <div className={styles.stepHead}>
                <span className={styles.stepIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
              </div>
              <p className={styles.stepText}>{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
