'use client'

import { setNavbar } from '@/redux/features/slices/adminSlice'
import { AlignRight, Bell, CalendarDays, Mail, MessageSquareMore, Search } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import UserInfo from './UserInfo'

export default function AdminTopNav({ user }) {
  const { navbarOpen } = useSelector(state => state.admin)
  const dispatch = useDispatch()
  return (
    <nav className='fixed top-0 left-0 lg:left-[230px] w-full lg:w-[calc(100%_-_230px)] h-20 flex items-center justify-end md:justify-between p-7 gap-5 bg-gray-100 z-50 border-b'>
      <div className='hidden md:flex items-center gap-2 w-1/2 max-w-96 p-2 bg-white rounded-full border'>
        <label htmlFor='search'>
          <Search />
        </label>
        <input id='search' className='w-full outline-none' placeholder='Search' />
      </div>

      <div className='flex items-center justify-end gap-4 w-auto md:w-full'>
        <div className='flex items-center gap-4 text-text-primary-muted'>
          <CalendarDays className='size-6' />
          <Bell className='size-6' />
          <Mail className='size-6' />
          <MessageSquareMore className='size-6' />
        </div>

        <div className='w-px h-10 bg-gray-100 bg-opacity-40' />

        <UserInfo user={user} className='hidden md:flex' />

        <AlignRight
          className='inline-block lg:hidden w-6 h-6 text-text-primary cursor-pointer'
          onClick={() => dispatch(setNavbar(!navbarOpen))}
        />
      </div>
    </nav>
  )
}
