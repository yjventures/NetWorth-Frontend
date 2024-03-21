import AdminSideNav from '@/components/common/admin/AdminSideNav'
import AdminTopNav from '@/components/common/admin/AdminTopNav'

export default function AdminDashboardLayout() {
  return (
    <main suppressHydrationWarning>
      <AdminSideNav />
      <AdminTopNav />
    </main>
  )
}
