import AdminNav from '@/components/common/admin/AdminNav'

export default function AdminDashboardLayout({ children }) {
  return (
    <main suppressHydrationWarning>
      <AdminNav />
      <section className='pt-24 pl-7 lg:pl-[258px] pr-7 pb-7'>{children}</section>
    </main>
  )
}
