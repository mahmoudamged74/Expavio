import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import styles from './CompanyStory.module.css'

export function CompanyStory() {
  const { t } = useTranslation('about')
  const blocks = t('story.blocks', { returnObjects: true })
  const list = Array.isArray(blocks) ? blocks : []

  return (
    <section className={`section ${styles.section}`} aria-labelledby="about-story-title">
      <Container>
        <Row className="g-4 g-xl-5">
          <Col xs={12} lg={5}>
            <div className={styles.aside}>
              <p className={styles.eyebrow}>{t('story.eyebrow')}</p>
              <h2 id="about-story-title" className={`font-display ${styles.title}`}>
                {t('story.title')}
              </h2>

              <figure className={styles.media}>
                <img
                  src="/assets/about-story.png"
                  alt={t('story.imageAlt')}
                  className={styles.image}
                  width={1024}
                  height={768}
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <div className={styles.highlight}>
                <p className={styles.highlightLabel}>{t('story.highlight.title')}</p>
                <p className={styles.highlightBody}>{t('story.highlight.body')}</p>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={7}>
            <ol className={styles.blocks}>
              {list.map((block, index) => (
                <li key={block.title} className={styles.block}>
                  <span className={styles.blockIndex} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className={styles.blockBody}>
                    <h3 className={styles.blockTitle}>{block.title}</h3>
                    <p className={styles.blockText}>{block.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
