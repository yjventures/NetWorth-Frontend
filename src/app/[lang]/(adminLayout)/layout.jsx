import AdminMobileNav from '@/components/common/admin/AdminMobileNav'
import AdminSideNav from '@/components/common/admin/AdminSideNav'
import AdminTopNav from '@/components/common/admin/AdminTopNav'

export default function AdminDashboardLayout({ children }) {
  return (
    <main suppressHydrationWarning>
      <AdminSideNav />
      <AdminTopNav />
      <AdminMobileNav />
      <section className='pt-24 pl-7 lg:pl-[258px] pr-7 pb-7'>{children}</section>
    </main>
  )
}
