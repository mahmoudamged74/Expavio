import { useTranslation } from 'react-i18next'

export function PrivacyPage() {
  const { t } = useTranslation('common')

  return (
    <article>
      <h1>{t('footer.privacy')}</h1>
      <p>
        This is a placeholder privacy policy for Expavio. Final legal text will be
        provided before launch.
      </p>
      <p>
        We respect your privacy and will only use contact information submitted
        through our forms to respond to your inquiries and deliver requested services.
      </p>
    </article>
  )
}
