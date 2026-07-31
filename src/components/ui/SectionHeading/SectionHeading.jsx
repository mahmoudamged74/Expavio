import clsx from 'clsx'
import styles from './SectionHeading.module.css'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'start',
  className,
}) {
  return (
    <div className={clsx(styles.heading, styles[align], className)}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      {title ? (
        <h2 className={clsx(styles.title, 'font-display')}>{title}</h2>
      ) : null}
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </div>
  )
}
