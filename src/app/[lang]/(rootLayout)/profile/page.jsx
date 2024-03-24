import ProfileCards from '@/components/pages/profile/ProfileCards'
import ProfileHeader from '@/components/pages/profile/ProfileHeader'

export default function ProfilePage() {
  return (
    <div className='container'>
      <ProfileHeader />
      <ProfileCards />
    </div>
  )
}
