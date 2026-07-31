import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  HiEnvelope,
  HiPhone,
  HiMapPin,
  HiChatBubbleLeftRight,
} from 'react-icons/hi2'
import styles from './Footer.module.css'

export function Footer() {
  const { t } = useTranslation('common')
  const { t: tContact } = useTranslation('contact')
  const year = new Date().getFullYear()
  const phone = tContact('info.phone')
  const email = tContact('info.email')

  const pages = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/about', label: t('nav.about') },
    { to: '/foreign-investor', label: t('nav.foreignInvestor') },
    { to: '/consultation', label: t('nav.consultation') },
    { to: '/contact', label: t('nav.contact') },
  ]

  const policies = [
    { to: '/privacy', label: t('footer.privacy') },
    { to: '/terms', label: t('footer.terms') },
  ]

  const contacts = [
    {
      href: `mailto:${email}`,
      label: email,
      Icon: HiEnvelope,
    },
    {
      href: `tel:${phone.replace(/\s/g, '')}`,
      label: phone,
      Icon: HiPhone,
    },
    {
      href: tContact('info.whatsapp.href'),
      label: t('footer.whatsapp'),
      Icon: HiChatBubbleLeftRight,
      external: true,
    },
    {
      href: null,
      label: tContact('info.address'),
      Icon: HiMapPin,
    },
  ]

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <img src="/assets/expavio.png" alt={t('brand')} />
          </Link>
          <p className={styles.blurb}>{t('footer.blurb')}</p>
        </div>

        <div className={styles.columns}>
          <div className={styles.col}>
            <h2 className={styles.colTitle}>{t('footer.pages')}</h2>
            <ul className={styles.list}>
              {pages.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h2 className={styles.colTitle}>{t('footer.contactTitle')}</h2>
            <ul className={styles.list}>
              {contacts.map((item) => {
                const Icon = item.Icon
                const content = (
                  <>
                    <span className={styles.iconWrap} aria-hidden="true">
                      <Icon />
                    </span>
                    <span>{item.label}</span>
                  </>
                )

                return (
                  <li key={item.label}>
                    {item.internal ? (
                      <Link to={item.href} className={styles.contactLink}>
                        {content}
                      </Link>
                    ) : item.href ? (
                      <a
                        href={item.href}
                        className={styles.contactLink}
                        {...(item.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {content}
                      </a>
                    ) : (
                      <span className={styles.contactLink}>{content}</span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className={styles.col}>
            <h2 className={styles.colTitle}>{t('footer.policies')}</h2>
            <ul className={styles.list}>
              {policies.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.divider} aria-hidden="true">
            <span className={styles.dividerLine} />
            <span className={styles.diamond} />
            <span className={styles.dividerLine} />
          </div>
          <p className={styles.copy}>
            © {year} {t('brand')}. {t('footer.rights')}.
          </p>
          <p className={styles.note}>{t('footer.note')}</p>
        </div>
      </div>
    </footer>
  )
}
