import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useAboutUs } from '@/hooks/useAboutUs'
import styles from './CompanyStory.module.css'

export function CompanyStory() {
  const { t } = useTranslation('about')
  const { data } = useAboutUs()
  const story = data?.story
  const fallbackBlocks = t('story.blocks', { returnObjects: true })

  const eyebrow = story?.eyebrow ?? t('story.eyebrow')
  const title = story?.title ?? t('story.title')
  const imageSrc = story?.image_url || '/assets/about-story.webp'
  const imageAlt = story?.image_alt ?? t('story.imageAlt')
  const highlightTitle = story?.idea_label ?? t('story.highlight.title')
  const highlightBody = story?.idea_text ?? t('story.highlight.body')

  const list =
    Array.isArray(story?.items) && story.items.length > 0
      ? story.items.map((item) => ({
          title: item.title,
          body: item.description,
        }))
      : Array.isArray(fallbackBlocks)
        ? fallbackBlocks
        : []

  return (
    <section className={`section ${styles.section}`} aria-labelledby="about-story-title">
      <Container>
        <Row className="g-4 g-xl-5">
          <Col xs={12} lg={5}>
            <div className={styles.aside}>
              <p className={styles.eyebrow}>{eyebrow}</p>
              <h2 id="about-story-title" className={`font-display ${styles.title}`}>
                {title}
              </h2>

              <figure className={styles.media}>
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className={styles.image}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <div className={styles.highlight}>
                <p className={styles.highlightLabel}>{highlightTitle}</p>
                <p className={styles.highlightBody}>{highlightBody}</p>
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
