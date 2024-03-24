'use client'

import LLink from '@/components/ui/llink'
import { cn } from '@/lib/utils'
import { getLocaleLang } from '@/utils/i18n/get-locale-lang'
import { usePathname } from 'next/navigation'

export default function NavLink({ href, icon }) {
  const pathname = usePathname()
  return (
    <LLink
      href={href}
      className={cn('text-gray-600 p-3', { 'text-primary': pathname === `/${getLocaleLang()}${href}` })}
    >
      {icon}
    </LLink>
  )
}
