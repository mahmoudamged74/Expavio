import { AppProviders } from '@/app/providers'
import { AppRouter } from '@/app/router'
import { SplashScreen } from '@/components/ui/SplashScreen/SplashScreen'

export default function App() {
  return (
    <AppProviders>
      <SplashScreen />
      <AppRouter />
    </AppProviders>
  )
}
