import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import styles from './ContactHero.module.css'

export function ContactHero() {
  const { t } = useTranslation('contact')

  return (
    <section className={styles.hero} aria-labelledby="contact-hero-title">
      <div className={styles.pattern} aria-hidden="true" />
      <Container className={styles.container}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{t('hero.eyebrow')}</p>
          <h1 id="contact-hero-title" className={`font-display ${styles.title}`}>
            {t('hero.title')}
          </h1>
          <p className={styles.description}>{t('hero.description')}</p>
        </div>
      </Container>
    </section>
  )
}
