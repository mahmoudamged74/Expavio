import { Outlet } from 'react-router-dom'
import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp/FloatingWhatsApp'
import styles from './MainLayout.module.css'

export function MainLayout() {
  return (
    <div className={styles.shell}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
