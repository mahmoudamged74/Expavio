import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button/Button'
import styles from './InvestorHero.module.css'

export function InvestorHero() {
  const { t } = useTranslation('investor')
  const stats = t('hero.stats', { returnObjects: true })
  const statList = Array.isArray(stats) ? stats : []

  return (
    <section className={styles.hero} aria-labelledby="investor-hero-title">
      <div className={styles.pattern} aria-hidden="true" />

      <Container className={styles.container}>
        <Row className="align-items-center g-4 g-xl-5">
          <Col xs={12} lg={6}>
            <div className={styles.copy}>
              <p className={styles.eyebrow}>{t('hero.eyebrow')}</p>
              <h1 id="investor-hero-title" className={`font-display ${styles.title}`}>
                {t('hero.title')}
              </h1>
              <p className={styles.description}>{t('hero.description')}</p>

              <div className={styles.actions}>
                <Button href="#investor-form" variant="primary" size="lg">
                  {t('hero.primaryCta')}
                </Button>
                <Button
                  to="/consultation"
                  variant="outline"
                  size="lg"
                  className={styles.secondaryCta}
                >
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
          </Col>

          <Col xs={12} lg={6}>
            <figure className={styles.media}>
              <span className={styles.mediaGlow} aria-hidden="true" />
              <img
                src="/assets/investor-hero.png"
                alt={t('hero.imageAlt')}
                className={styles.image}
                width={1024}
                height={768}
                decoding="async"
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
