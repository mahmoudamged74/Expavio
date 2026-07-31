import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import styles from './WorkMethodology.module.css'

export function WorkMethodology() {
  const { t } = useTranslation('about')
  const steps = t('methodology.steps', { returnObjects: true })
  const list = Array.isArray(steps) ? steps : []

  return (
    <section
      className={styles.section}
      aria-labelledby="about-method-title"
      style={{ backgroundImage: 'url(/assets/about-method.png)' }}
    >
      <div className={styles.scrim} aria-hidden="true" />

      <Container className={styles.container}>
        <div className={styles.head}>
          <p className={styles.eyebrow}>{t('methodology.eyebrow')}</p>
          <h2 id="about-method-title" className={`font-display ${styles.title}`}>
            {t('methodology.title')}
          </h2>
          <p className={styles.subtitle}>{t('methodology.subtitle')}</p>
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
