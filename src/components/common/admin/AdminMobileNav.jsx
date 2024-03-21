'use client'

import { Button } from '@/components/ui/button'
import LLink from '@/components/ui/llink'
import { adminNavLinks } from '@/constants/admin-nav-links'
import usePush from '@/hooks/usePush'
import { cn } from '@/lib/utils'
import api from '@/redux/api/apiSlice'
import { setNavbar } from '@/redux/features/slices/adminSlice'
import { deleteCookie } from 'cookies-next'
import { X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

export default function AdminMobileNav() {
  const push = usePush()
  const pathname = usePathname()
  const { navbarOpen } = useSelector(state => state.admin)
  const dispatch = useDispatch()

  const handleLogout = () => {
    deleteCookie('accessToken')
    deleteCookie('refreshToken')
    deleteCookie('userData')
    toast.success('Logged out successfully!')
    push('/')
    dispatch(setNavbar(false))
    dispatch(api.util.resetApiState())
  }
  return (
    <nav
      className={cn(
        'fixed top-0 right-0 bg-gray-800 w-[230px] h-screen p-5 flex flex-col items-center justify-between transition-all duration-500 z-50',
        {
          '-right-[230px]': !navbarOpen
        }
      )}
    >
      <div className='flex flex-col items-center justify-center w-full'>
        <div className='flex items-center justify-between gap-4 mb-5'>
          <LLink href='/' className='font-medium tracking-widest text-white'>
            NET WORTH
          </LLink>
          <X
            className='text-white cursor-pointer w-8 h-8'
            strokeWidth={1.5}
            onClick={() => dispatch(setNavbar(false))}
          />
        </div>

        <ul className='flex flex-col items-center w-full px-2'>
          {adminNavLinks.map(link => (
            <li key={link.id} className='w-full'>
              <LLink href={link.href}>
                <button
                  className={cn(
                    'w-full rounded-lg text-gray-light p-3 text-left hover:bg-bg-primary-secondary hover:text-text-white',
                    { 'bg-secondary-foreground text-white': pathname.includes(link.href) }
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
