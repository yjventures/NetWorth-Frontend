'use client'

import { Button } from '@/components/ui/button'
import LLink from '@/components/ui/llink'
import { adminNavLinks } from '@/constants/admin-nav-links'
import usePush from '@/hooks/usePush'
import { cn } from '@/lib/utils'
import api from '@/redux/api/apiSlice'
import { deleteCookie } from 'cookies-next'
import { usePathname } from 'next/navigation'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

export default function AdminSideNav() {
  const push = usePush()
  const pathname = usePathname()
  const dispatch = useDispatch()

  const handleLogout = () => {
    deleteCookie('accessToken')
    deleteCookie('refreshToken')
    deleteCookie('userData')
    toast.success('Logged out successfully!')
    push('/')
    dispatch(api.util.resetApiState())
  }
  return (
    <nav className='fixed top-0 left-0 w-[230px] bg-gray-800 h-screen hidden lg:flex flex-col items-center justify-between p-5'>
      <div className='flex flex-col items-center justify-center w-full'>
        <LLink href='/' className='mb-5 font-medium tracking-widest text-white'>
          NET WORTH
        </LLink>

        <ul className='flex flex-col items-center w-full px-2'>
          {adminNavLinks.map(link => (
            <li key={link.id} className='w-full'>
              <LLink href={link.href}>
                <button
                  className={cn(
                    'w-full rounded-lg text-gray-light p-3 text-left hover:bg-secondary-foreground text-white/70',
                    { 'bg-secondary-foreground text-white font-medium': pathname.includes(link.href) }
                  )}
                >
                  {link.label}
                </button>
              </LLink>
            </li>
          ))}
        </ul>
      </div>

      <Button onClick={handleLogout} className='w-full rounded-md h-12'>
        Log Out
      </Button>
    </nav>
  )
}
