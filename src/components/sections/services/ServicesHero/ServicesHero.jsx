import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button/Button'
import styles from './ServicesHero.module.css'

export function ServicesHero() {
  const { t } = useTranslation('services')

  return (
    <section className={styles.hero} aria-labelledby="services-hero-title">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.pattern} aria-hidden="true" />

      <Container className={styles.container}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{t('page.hero.eyebrow')}</p>
          <h1 id="services-hero-title" className={`font-display ${styles.title}`}>
            {t('page.hero.title')}
          </h1>
          <p className={styles.description}>{t('page.hero.description')}</p>

          <div className={styles.actions}>
            <Button to="/consultation" variant="primary" size="lg">
              {t('page.hero.primaryCta')}
            </Button>
            <Button
              href="#solution-packages"
              variant="outline"
              size="lg"
              className={styles.secondaryCta}
            >
              {t('page.hero.secondaryCta')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
