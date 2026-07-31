import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'
import { getServiceIcon } from '@/features/services/icons'
import styles from './ServiceCard.module.css'

export function ServiceCard({ service, className }) {
  const { t, i18n } = useTranslation('services')
  const Icon = getServiceIcon(service.icon)
  const Arrow = i18n.language?.startsWith('ar') ? HiArrowLeft : HiArrowRight
  const items = Array.isArray(service.items) ? service.items : []
  const preview = items.slice(0, 3)
  const remaining = Math.max(items.length - preview.length, 0)

  return (
    <article className={clsx(styles.card, className)}>
      <div className={styles.top}>
        <span className={styles.iconWrap} aria-hidden="true">
          <Icon className={styles.icon} />
        </span>
        {items.length > 0 ? (
          <span className={styles.count}>
            {items.length} {t('itemsLabel')}
          </span>
        ) : null}
      </div>

      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.shortDescription}</p>

      {preview.length > 0 ? (
        <ul className={styles.examples}>
          {preview.map((item) => (
            <li key={item}>{item}</li>
          ))}
          {remaining > 0 ? <li className={styles.more}>+{remaining}</li> : null}
        </ul>
      ) : null}

      <Link to={`/services/${service.slug}`} className={styles.cta}>
        {t('detailsCta')}
        <Arrow className={styles.arrow} aria-hidden="true" />
      </Link>
    </article>
  )
}
