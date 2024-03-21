'use client'

import { useGetPersonalInfoQuery } from '@/redux/features/usersApi'
import AdminMobileNav from './AdminMobileNav'
import AdminSideNav from './AdminSideNav'
import AdminTopNav from './AdminTopNav'

export default function AdminNav() {
  const { data } = useGetPersonalInfoQuery()
  return (
    <>
      <AdminSideNav />
      <AdminTopNav user={data?.data?.user} />
      <AdminMobileNav user={data?.data?.user} />
    </>
  )
}
