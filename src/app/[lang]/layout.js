import { Inter } from 'next/font/google'
import '@/styles/globals.scss'
import ReduxProvider from '@/lib/redux/redux-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NetWorth',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className} suppressHydrationWarning>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
