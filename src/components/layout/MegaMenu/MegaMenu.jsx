import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'
import { getLocalizedServiceGroups } from '@/features/services'
import { getServiceIcon } from '@/features/services/icons'
import styles from './MegaMenu.module.css'

export function MegaMenu({ open, onClose, onMouseEnter, onMouseLeave }) {
  const { t, i18n } = useTranslation(['services', 'common'])
  const groups = getLocalizedServiceGroups(i18n.language)
  const isRtl = i18n.language?.startsWith('ar')
  const Arrow = isRtl ? HiArrowLeft : HiArrowRight

  return (
    <div
      className={clsx(styles.panel, open && styles.open)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="region"
      aria-label={t('title')}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={styles.backdrop}
        aria-label={t('actions.back', { ns: 'common' })}
        tabIndex={-1}
        onClick={onClose}
      />

      <div className={styles.shell}>
        <div className={clsx('container', styles.inner)}>
          <div className={styles.grid}>
            {groups.map((group) => (
              <div key={group.id} className={styles.column}>
                <h4 className={styles.groupTitle}>{group.title}</h4>
                <ul className={styles.list}>
                  {group.services.map((service) => {
                    const Icon = getServiceIcon(service.icon)

                    return (
                      <li key={service.slug}>
                        <Link
                          to={`/services/${service.slug}`}
                          className={styles.link}
                          onClick={onClose}
                        >
                          <span className={styles.iconWrap} aria-hidden="true">
                            <Icon className={styles.icon} />
                          </span>
                          <span className={styles.linkTitle}>{service.title}</span>
                          <Arrow className={styles.linkArrow} aria-hidden="true" />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.footer}>
            <Link to="/services" className={styles.viewAll} onClick={onClose}>
              {t('megaMenu.viewAll')}
              <Arrow aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
