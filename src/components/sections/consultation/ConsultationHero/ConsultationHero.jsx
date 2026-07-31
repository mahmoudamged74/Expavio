import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import styles from './ConsultationHero.module.css'

export function ConsultationHero() {
  const { t } = useTranslation('consultation')

  return (
    <section className={styles.hero} aria-labelledby="consultation-hero-title">
      <div className={styles.pattern} aria-hidden="true" />
      <Container className={styles.container}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{t('hero.eyebrow')}</p>
          <h1 id="consultation-hero-title" className={`font-display ${styles.title}`}>
            {t('hero.title')}
          </h1>
          <p className={styles.description}>{t('hero.description')}</p>
        </div>
      </Container>
    </section>
  )
}
