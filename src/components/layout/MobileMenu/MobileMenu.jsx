import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import {
  HiXMark,
  HiChevronDown,
  HiMoon,
  HiSun,
} from 'react-icons/hi2'
import { Button } from '@/components/ui/Button/Button'
import { useTheme } from '@/app/providers/ThemeProvider'
import { switchLanguage } from '@/app/providers/LanguageProvider'
import { getLocalizedServiceGroups } from '@/features/services'
import { getServiceIcon } from '@/features/services/icons'
import styles from './MobileMenu.module.css'

export function MobileMenu({ isOpen, onClose }) {
  const { t, i18n } = useTranslation('common')
  const { theme, toggleTheme } = useTheme()
  const groups = getLocalizedServiceGroups(i18n.language)
  const isAr = i18n.language?.startsWith('ar')
  const [servicesOpen, setServicesOpen] = useState(false)
  const closeRef = useRef(null)
  const titleId = useId()

  useEffect(() => {
    if (!isOpen) {
      setServicesOpen(false)
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const timer = window.setTimeout(() => closeRef.current?.focus(), 40)

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const navClass = ({ isActive }) =>
    clsx(styles.navLink, isActive && styles.navLinkActive)

  const subClass = ({ isActive }) =>
    clsx(styles.subLink, isActive && styles.subLinkActive)

  return createPortal(
    <div className={styles.root} role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <button
        type="button"
        className={styles.backdrop}
        aria-label={t('actions.back')}
        onClick={onClose}
      />

      <div className={styles.panel}>
        <div className={styles.header}>
          <div className={styles.brand}>
            <img
              src="/assets/expavio-logo.webp"
              alt=""
              className={styles.logo}
              width={140}
              height={42}
              decoding="async"
            />
            <div>
              <p id={titleId} className={styles.brandName}>
                {t('brand')}
              </p>
              <p className={styles.brandTag}>{t('tagline')}</p>
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label={t('actions.back')}
          >
            <HiXMark aria-hidden="true" />
          </button>
        </div>

        <nav className={styles.nav} aria-label={t('footer.quickLinks')}>
          <NavLink to="/" end className={navClass} onClick={onClose}>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/about" className={navClass} onClick={onClose}>
            {t('nav.about')}
          </NavLink>

          <div className={styles.servicesBlock}>
            <div className={styles.servicesRow}>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  clsx(styles.navLink, styles.servicesMain, isActive && styles.navLinkActive)
                }
                onClick={onClose}
              >
                {t('nav.services')}
              </NavLink>
              <button
                type="button"
                className={clsx(styles.servicesToggle, servicesOpen && styles.servicesToggleOpen)}
                aria-expanded={servicesOpen}
                aria-controls="mobile-services-panel"
                onClick={() => setServicesOpen((prev) => !prev)}
              >
                <HiChevronDown aria-hidden="true" />
              </button>
            </div>

            <div
              id="mobile-services-panel"
              className={styles.servicesPanel}
              hidden={!servicesOpen}
            >
              {groups.map((group) => (
                <div key={group.id} className={styles.serviceGroup}>
                  <p className={styles.groupLabel}>{group.title}</p>
                  <ul className={styles.subNav}>
                    {group.services.map((service) => {
                      const Icon = getServiceIcon(service.icon)

                      return (
                        <li key={service.slug}>
                          <NavLink
                            to={`/services/${service.slug}`}
                            className={subClass}
                            onClick={onClose}
                          >
                            <span className={styles.subIcon} aria-hidden="true">
                              <Icon />
                            </span>
                            <span>{service.title}</span>
                          </NavLink>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <NavLink to="/foreign-investor" className={navClass} onClick={onClose}>
            {t('nav.foreignInvestor')}
          </NavLink>
          <NavLink to="/contact" className={navClass} onClick={onClose}>
            {t('nav.contact')}
          </NavLink>
        </nav>

        <div className={styles.footer}>
          <div className={styles.controls}>
            <div className={styles.langSwitch} role="group" aria-label={t('lang.toggle')}>
              <button
                type="button"
                className={clsx(styles.langOption, isAr && styles.langActive)}
                onClick={() => switchLanguage(i18n, 'ar')}
                aria-pressed={isAr}
              >
                AR
              </button>
              <button
                type="button"
                className={clsx(styles.langOption, !isAr && styles.langActive)}
                onClick={() => switchLanguage(i18n, 'en')}
                aria-pressed={!isAr}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              className={styles.themeBtn}
              onClick={toggleTheme}
              aria-label={t('theme.toggle')}
            >
              {theme === 'dark' ? <HiSun aria-hidden="true" /> : <HiMoon aria-hidden="true" />}
              <span>{theme === 'dark' ? t('theme.light') : t('theme.dark')}</span>
            </button>
          </div>

          <Button to="/consultation" size="md" className={styles.cta} onClick={onClose}>
            {t('actions.bookConsultation')}
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
