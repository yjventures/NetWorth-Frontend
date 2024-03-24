import ReduxProvider from '@/lib/redux/redux-provider'
import { cn } from '@/lib/utils'
import styles from '@/styles/common/rootLayout/rootLayout.module.scss'
import '@/styles/globals.scss'
import { Poppins } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import 'react-phone-input-2/lib/plain.css'
import 'swiper/css'
import 'swiper/css/pagination'

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '300', '400', '500', '700'] })

export const metadata = {
  title: 'NetWorth'
}

export default function RootLayout({ children }) {
  return (
    <html>
      <ReduxProvider>
        <body className={poppins.className} suppressHydrationWarning>
          <main className={cn('min-h-screen', styles.root)}>{children}</main>
          <Toaster position='top-center' />
        </body>
      </ReduxProvider>
    </html>
  )
}
