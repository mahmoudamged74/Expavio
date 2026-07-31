import { ThemeProvider } from './ThemeProvider'
import { LanguageProvider } from './LanguageProvider'

export function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  )
}
