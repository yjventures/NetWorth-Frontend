import ReduxProvider from '@/lib/redux/redux-provider'
import '@/styles/globals.scss'
import { Poppins } from 'next/font/google'
import 'swiper/css'
import 'swiper/css/pagination'

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '300', '400', '500', '700'] })

export const metadata = {
  title: 'NetWorth'
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={poppins.className} suppressHydrationWarning>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
