import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button/Button'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  const { t } = useTranslation('common')

  return (
    <section className={`section ${styles.page}`}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <h1 className={`${styles.title} font-display`}>{t('notFound.title')}</h1>
        <p className={styles.description}>{t('notFound.description')}</p>
        <Button to="/" variant="primary" size="lg">
          {t('notFound.cta')}
        </Button>
      </div>
    </section>
  )
}
