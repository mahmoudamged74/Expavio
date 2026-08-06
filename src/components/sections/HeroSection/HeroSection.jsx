import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/app/providers/ThemeProvider'
import { Button } from '@/components/ui/Button/Button'
import { useHero } from '@/hooks/useHero'
import styles from './HeroSection.module.css'

function getHeroBg(isAr, isLight) {
  const lang = isAr ? 'ar' : 'en'
  const mode = isLight ? 'light' : 'dark'
  return `/assets/hero-${lang}-${mode}.png`
}

export function HeroSection() {
  const { t, i18n } = useTranslation('home')
  const { t: tc } = useTranslation('common')
  const { theme } = useTheme()
  const { data: hero } = useHero()
  const isAr = i18n.language?.startsWith('ar')
  const isLight = theme === 'light'
  const bgSrc = getHeroBg(isAr, isLight)

  const brand = hero?.name ?? tc('brand')
  const tagline = hero?.subtitle ?? tc('tagline')
  const title = hero?.title ?? t('hero.title')
  const description = hero?.description ?? t('hero.subtitle')

  return (
    <section
      className={`${styles.hero} ${isAr ? styles.ar : styles.en} ${isLight ? styles.light : styles.dark}`}
      aria-labelledby="hero-title"
    >
      <img
        src={bgSrc}
        alt=""
        aria-hidden="true"
        className={styles.bg}
        decoding="async"
        fetchPriority="high"
      />
      <div className={styles.scrim} aria-hidden="true" />

      <Container className={styles.container}>
        <div className={`${styles.copy} ${styles.rise}`}>
          <p className={styles.brand}>{brand}</p>
          <p className={styles.tagline}>{tagline}</p>
          <h1 id="hero-title" className={`font-display ${styles.title}`}>
            {title}
          </h1>
          <p className={styles.subtitle}>{description}</p>
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
