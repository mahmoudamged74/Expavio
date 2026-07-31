import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button/Button'
import styles from './CTASection.module.css'

export function CTASection() {
  const { t } = useTranslation('home')

  return (
    <section className={`section ${styles.section}`} aria-labelledby="cta-title">
      <Container>
        <div
          className={styles.card}
          style={{ backgroundImage: 'url(/assets/cta-bg.webp)' }}
        >
          <div className={styles.scrim} aria-hidden="true" />
          <div className={styles.content}>
            <h2 id="cta-title" className={`font-display ${styles.title}`}>
              {t('cta.title')}
            </h2>
            <div className={styles.actions}>
              <Button to="/consultation" variant="primary" size="lg">
                {t('cta.primaryCta')}
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className={styles.secondaryCta}
              >
                {t('cta.secondaryCta')}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
