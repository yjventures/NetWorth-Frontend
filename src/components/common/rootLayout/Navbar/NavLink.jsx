'use client'

import LLink from '@/components/ui/llink'
import { cn } from '@/lib/utils'
import { getLocaleLang } from '@/utils/i18n/get-locale-lang'
import { usePathname } from 'next/navigation'

export default function NavLink({ href, icon }) {
  const pathname = usePathname()
  const homeRoute = `/${getLocaleLang()}/`
  const pathSelector = () => {
    if (`/${getLocaleLang()}${href}` === pathname) {
      console.log(pathname)
      return pathname === homeRoute
    } else {
      return pathname.includes(href)
    }
  }

  //console.log(pathSelector())

  return (
    <LLink
      href={href}
      className={cn('text-gray-600 p-3', {
        'text-primary': pathSelector()
      })}
    >
      {icon}
    </LLink>
  )
}

// pathname === `/${getLocaleLang()}/` ? pathname === `/${getLocaleLang()}/` : pathname.includes(href)
