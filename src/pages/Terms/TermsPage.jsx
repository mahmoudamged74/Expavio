import { useTranslation } from 'react-i18next'

export function TermsPage() {
  const { t } = useTranslation('common')

  return (
    <article>
      <h1>{t('footer.terms')}</h1>
      <p>
        This is a placeholder terms and conditions page for Expavio. Final legal
        text will be provided before launch.
      </p>
      <p>
        By using this website you agree to contact us for informational purposes
        only until official terms are published.
      </p>
    </article>
  )
}
