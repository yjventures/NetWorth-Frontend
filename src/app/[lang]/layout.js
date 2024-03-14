import { Inter } from 'next/font/google'
import '@/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NetWorth',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
