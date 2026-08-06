import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button/Button'
import { useForeignInvestor } from '@/hooks/useForeignInvestor'
import styles from './ForeignInvestorSection.module.css'

export function ForeignInvestorSection() {
  const { t } = useTranslation('home')
  const { data } = useForeignInvestor()
  const fallbackItems = t('foreignInvestor.items', { returnObjects: true })

  const hero = data?.hero
  const title = hero?.title ?? t('foreignInvestor.title')
  const description = hero?.description ?? t('foreignInvestor.description')
  const primaryCta = hero?.primary_cta ?? t('foreignInvestor.primaryCta')
  const secondaryCta = hero?.secondary_cta ?? t('foreignInvestor.secondaryCta')
  const imageSrc = hero?.image_url || '/assets/foreign-investor.webp'
  const imageAlt = hero?.image_alt ?? t('foreignInvestor.imageAlt')

  const list =
    Array.isArray(data?.services?.items) && data.services.items.length > 0
      ? data.services.items.map((item) => item.title).filter(Boolean)
      : Array.isArray(fallbackItems)
        ? fallbackItems
        : []

  return (
    <section className={styles.section} aria-labelledby="foreign-investor-title">
      <Container>
        <Row className={`${styles.row} align-items-center g-4 g-lg-5`}>
          <Col xs={12} lg={6} className={styles.copyCol}>
            <p className={styles.eyebrow}>{t('foreignInvestor.eyebrow')}</p>
            <h2 id="foreign-investor-title" className={`font-display ${styles.title}`}>
              {title}
            </h2>
            <p className={styles.description}>{description}</p>

            <ul className={styles.list}>
              {list.map((item) => (
                <li key={item} className={styles.item}>
                  <span className={styles.bullet} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <Button to="/consultation" variant="primary" size="lg">
                {primaryCta}
              </Button>
              <Button
                to="/foreign-investor"
                variant="outline"
                size="lg"
                className={styles.secondaryCta}
              >
                {secondaryCta}
              </Button>
            </div>
          </Col>

          <Col xs={12} lg={6} className={styles.mediaCol}>
            <figure className={styles.media}>
              <img
                src={imageSrc}
                alt={imageAlt}
                className={styles.image}
                width={1400}
                height={1080}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
