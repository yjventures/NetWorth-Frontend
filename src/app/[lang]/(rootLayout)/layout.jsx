import Navbar from '@/components/common/rootLayout/Navbar'
import { cn } from '@/lib/utils'
import styles from '@/styles/common/rootLayout/rootLayout.module.scss'

export default function RootLayout({ children }) {
  return (
    <div className={cn('min-h-screen', styles.root)}>
      <Navbar />
      {children}
    </div>
  )
}
