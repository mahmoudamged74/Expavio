import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { useClientJourney } from '@/hooks/useClientJourney'
import styles from './JourneySection.module.css'

const MOVE_MS = 1100
const HOLD_MS = 650

export function JourneySection() {
  const { t, i18n } = useTranslation('home')
  const { data: journey } = useClientJourney()
  const fallbackSteps = t('journey.steps', { returnObjects: true })

  const list =
    Array.isArray(journey) && journey.length > 0
      ? [...journey]
          .sort((a, b) => (a.step_number ?? 0) - (b.step_number ?? 0))
          .map((step) => ({
            title: step.title,
            description: step.description,
          }))
      : Array.isArray(fallbackSteps)
        ? fallbackSteps
        : []

  const [active, setActive] = useState(0)
  const [horizontal, setHorizontal] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 992px)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 992px)')
    const sync = () => setHorizontal(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (list.length < 2) return undefined

    let cancelled = false
    let timer

    const tick = (index) => {
      if (cancelled) return

      const wrapping = index === 0
      setActive(index)

      timer = window.setTimeout(
        () => {
          timer = window.setTimeout(() => {
            tick((index + 1) % list.length)
          }, HOLD_MS)
        },
        wrapping ? 40 : MOVE_MS,
      )
    }

    timer = window.setTimeout(() => tick(0), 120)

    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [list.length, i18n.language])

  const progress = list.length > 1 ? active / (list.length - 1) : 0

  return (
    <section className={`section ${styles.section}`} aria-label={t('journey.title')}>
      <Container>
        <SectionHeading
          eyebrow={t('journey.eyebrow')}
          title={t('journey.title')}
          subtitle={t('journey.subtitle')}
          align="center"
        />

        <div className={styles.timelineWrap}>
          <span
            className={`${styles.track} ${horizontal ? styles.trackX : styles.trackY}`}
            aria-hidden="true"
          />
          <span
            className={`${styles.progress} ${horizontal ? styles.progressX : styles.progressY} ${active === 0 ? styles.progressReset : ''}`}
            style={
              horizontal
                ? { transform: `scaleX(${Math.max(progress, 0.02)})` }
                : { transform: `scaleY(${Math.max(progress, 0.02)})` }
            }
            aria-hidden="true"
          />

          <ol className={styles.timeline}>
            {list.map((step, index) => {
              const isActive = index === active
              const isDone = index < active

              return (
                <li
                  key={step.title}
                  className={`${styles.step} ${isActive ? styles.stepActive : ''} ${isDone ? styles.stepDone : ''}`}
                >
                  <div className={styles.marker} aria-hidden="true">
                    <span className={styles.circle}>
                      <span className={styles.index}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </span>
                  </div>
                  <div className={styles.card}>
                    <h3 className={styles.title}>{step.title}</h3>
                    <p className={styles.description}>{step.description}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </Container>
    </section>
  )
}
