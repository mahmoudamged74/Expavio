import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button/Button'
import styles from './HeroSection.module.css'

export function HeroSection() {
  const { t, i18n } = useTranslation('home')
  const { t: tc } = useTranslation('common')
  const isAr = i18n.language?.startsWith('ar')
  const bgSrc = isAr ? '/assets/heroar.webp' : '/assets/hero.webp'

  return (
    <section
      className={`${styles.hero} ${isAr ? styles.ar : styles.en}`}
      aria-labelledby="hero-title"
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
      <div className={styles.scrim} aria-hidden="true" />

      <Container className={styles.container}>
        <div className={`${styles.copy} ${styles.rise}`}>
          <p className={styles.brand}>{tc('brand')}</p>
          <p className={styles.tagline}>{tc('tagline')}</p>
          <h1 id="hero-title" className={`font-display ${styles.title}`}>
            {t('hero.title')}
          </h1>
          <p className={styles.subtitle}>{t('hero.subtitle')}</p>
          <div className={styles.actions}>
            <Button to="/consultation" variant="primary" size="lg">
              {t('hero.primaryCta')}
            </Button>
            <Button
              to="/services"
              variant="outline"
              size="lg"
              className={styles.secondaryCta}
            >
              {t('hero.secondaryCta')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
