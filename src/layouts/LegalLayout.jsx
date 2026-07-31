import { Outlet } from 'react-router-dom'
import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp/FloatingWhatsApp'
import styles from './LegalLayout.module.css'

export function LegalLayout() {
  return (
    <div className={styles.shell}>
      <Header />
      <main className={styles.main}>
        <div className={`container ${styles.content}`}>
          <Outlet />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
