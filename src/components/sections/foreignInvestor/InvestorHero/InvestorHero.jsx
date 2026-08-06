import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button/Button'
import { useForeignInvestor } from '@/hooks/useForeignInvestor'
import styles from './InvestorHero.module.css'

export function InvestorHero() {
  const { t } = useTranslation('investor')
  const { data } = useForeignInvestor()
  const hero = data?.hero
  const fallbackStats = t('hero.stats', { returnObjects: true })

  const title = hero?.title ?? t('hero.title')
  const description = hero?.description ?? t('hero.description')
  const primaryCta = hero?.primary_cta ?? t('hero.primaryCta')
  const secondaryCta = hero?.secondary_cta ?? t('hero.secondaryCta')
  const imageSrc = hero?.image_url || '/assets/investor-hero.webp'
  const imageAlt = hero?.image_alt ?? t('hero.imageAlt')

  const statList =
    Array.isArray(hero?.stats) && hero.stats.length > 0
      ? hero.stats
      : Array.isArray(fallbackStats)
        ? fallbackStats
        : []

  return (
    <section className={styles.hero} aria-labelledby="investor-hero-title">
      <div className={styles.pattern} aria-hidden="true" />

      <Container className={styles.container}>
        <Row className="align-items-center g-4 g-xl-5">
          <Col xs={12} lg={6}>
            <div className={styles.copy}>
              <p className={styles.eyebrow}>{t('hero.eyebrow')}</p>
              <h1 id="investor-hero-title" className={`font-display ${styles.title}`}>
                {title}
              </h1>
              <p className={styles.description}>{description}</p>

              <div className={styles.actions}>
                <Button href="#investor-form" variant="primary" size="lg">
                  {primaryCta}
                </Button>
                <Button
                  to="/consultation"
                  variant="outline"
                  size="lg"
                  className={styles.secondaryCta}
                >
                  {secondaryCta}
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
          </Col>

          <Col xs={12} lg={6}>
            <figure className={styles.media}>
              <span className={styles.mediaGlow} aria-hidden="true" />
              <img
                src={imageSrc}
                alt={imageAlt}
                className={styles.image}
                width={1400}
                height={1050}
                decoding="async"
                fetchPriority="high"
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
