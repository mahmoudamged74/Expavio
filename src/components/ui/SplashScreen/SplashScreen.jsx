import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './SplashScreen.module.css'

const STORAGE_KEY = 'expavio-splash-seen'
const MIN_VISIBLE_MS = 2400
const FADE_MS = 600

export function SplashScreen() {
  const { t } = useTranslation('common')
  const [visible, setVisible] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) !== '1'
    } catch {
      return true
    }
  })
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (!visible) return undefined

    const started = Date.now()
    let fadeTimer
    let hideTimer
    let cancelled = false

    const finish = () => {
      if (cancelled) return
      const elapsed = Date.now() - started
      const wait = Math.max(0, MIN_VISIBLE_MS - elapsed)

      fadeTimer = window.setTimeout(() => {
        if (cancelled) return
        setFading(true)
        try {
          localStorage.setItem(STORAGE_KEY, '1')
        } catch {
          // ignore storage failures
        }
        hideTimer = window.setTimeout(() => {
          if (!cancelled) setVisible(false)
        }, FADE_MS)
      }, wait)
    }

    // Prefetch critical home images while splash is up
    ;['/assets/hero.webp', '/assets/heroar.webp', '/assets/expavio-logo.webp'].forEach(
      (src) => {
        const img = new Image()
        img.src = src
      },
    )

    if (document.readyState === 'complete') {
      finish()
    } else {
      window.addEventListener('load', finish, { once: true })
      // Fallback if load is delayed
      fadeTimer = window.setTimeout(finish, 2500)
    }

    return () => {
      cancelled = true
      window.clearTimeout(fadeTimer)
      window.clearTimeout(hideTimer)
      window.removeEventListener('load', finish)
    }
  }, [visible])

  useEffect(() => {
    if (!visible) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [visible])

  if (!visible) return null

  return (
    <div
      className={`${styles.splash} ${fading ? styles.fading : ''}`}
      role="status"
      aria-live="polite"
      aria-label={t('brand')}
    >
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.pattern} aria-hidden="true" />
      <img
        src="/assets/expavio-logo.webp"
        alt={t('brand')}
        className={styles.logo}
        width={240}
        height={80}
        decoding="async"
        fetchPriority="high"
      />
    </div>
  )
}
