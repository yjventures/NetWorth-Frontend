'use client'

import avatar from '@/assets/images/common/avatar.png'
import { Img } from '@/components/ui/img'
import { setNavbar } from '@/redux/features/slices/adminSlice'
import { useGetPersonalInfoQuery } from '@/redux/features/usersApi'
import { AlignRight, Bell, CalendarDays, ChevronDown, Mail, MessageSquareMore, Search } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'

export default function AdminTopNav() {
  const { data } = useGetPersonalInfoQuery()
  const userData = data?.data?.user?.personal_info
  const role = data?.data?.user?.role
  const { navbarOpen } = useSelector(state => state.admin)
  const dispatch = useDispatch()
  return (
    <nav className='fixed top-0 left-0 lg:left-[230px] w-full lg:w-[calc(100%_-_230px)] h-20 flex items-center justify-between p-7 gap-5 bg-white z-50 border-b'>
      <div className='flex items-center gap-2 w-1/2 max-w-96 p-2'>
        <label htmlFor='search'>
          <Search />
        </label>
        <input id='search' className='w-full outline-none' placeholder='Search' />
      </div>

      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-4 text-text-primary-muted'>
          <CalendarDays className='size-6' />
          <Bell className='size-6' />
          <Mail className='size-6' />
          <MessageSquareMore className='size-6' />
        </div>

        <div className='w-px h-10 bg-gray-100 bg-opacity-40' />

        <div className='flex items-center gap-3 cursor-pointer'>
          {userData?.profile_image ? (
            <Img
              src={userData?.profile_image}
              alt={userData?.name}
              className='w-8 h-8 object-cover border rounded-full'
            />
          ) : (
            <Img src={avatar} alt='User' className='w-8 h-8 object-cover border rounded-full' />
          )}
          <div className='flex flex-col'>
            <p className='text-sm'>{userData?.name}</p>
            <p className='text-xs text-text-primary-muted'>{role?.slice(0, 1)?.toUpperCase() + role?.slice(1)}</p>
          </div>
          <ChevronDown className='w-4.5 h-4.5 text-text-primary-muted' />
        </div>

        <AlignRight
          className='inline-block lg:hidden w-6 h-6 text-text-primary cursor-pointer'
          onClick={() => dispatch(setNavbar(!navbarOpen))}
        />
      </div>
    </nav>
  )
}
