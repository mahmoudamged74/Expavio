import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button/Button'
import styles from './AboutHero.module.css'

export function AboutHero() {
  const { t } = useTranslation('about')
  const stats = t('hero.stats', { returnObjects: true })
  const statList = Array.isArray(stats) ? stats : []

  return (
    <section
      className={styles.hero}
      aria-labelledby="about-hero-title"
      style={{ backgroundImage: 'url(/assets/about-hero.png)' }}
    >
      <div className={styles.scrim} aria-hidden="true" />
      <div className={styles.pattern} aria-hidden="true" />

      <Container className={styles.container}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{t('hero.eyebrow')}</p>
          <h1 id="about-hero-title" className={`font-display ${styles.title}`}>
            {t('hero.title')}
          </h1>
          <p className={styles.description}>{t('hero.description')}</p>

          <div className={styles.actions}>
            <Button to="/consultation" variant="primary" size="lg">
              {t('hero.primaryCta')}
            </Button>
            <Button to="/services" variant="outline" size="lg" className={styles.secondaryCta}>
              {t('hero.secondaryCta')}
            </Button>
          </div>

          {statList.length > 0 && (
            <dl className={styles.stats}>
              {statList.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <dt className={styles.statValue}>{stat.value}</dt>
                  <dd className={styles.statLabel}>{stat.label}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </Container>
    </section>
  )
}
