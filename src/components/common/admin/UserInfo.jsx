import avatar from '@/assets/images/common/avatar.png'
import { Img } from '@/components/ui/img'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

export default function UserInfo({ user, className, darkBg }) {
  const userData = user?.personal_info
  const role = user?.role
  return (
    <div className={cn('items-center gap-3 cursor-pointer', className)}>
      {userData?.profile_image ? (
        <Img src={userData?.profile_image} alt={userData?.name} className='w-8 h-8 object-cover border rounded-full' />
      ) : (
        <Img src={avatar} alt='User' className='w-8 h-8 object-cover border rounded-full' />
      )}
      <div className={cn('flex flex-col', { 'text-white': darkBg })}>
        <p className='text-sm'>{userData?.name}</p>
        <p className='text-xs text-text-primary-muted'>
          {role ? role?.slice(0, 1)?.toUpperCase() + role?.slice(1) : null}
        </p>
      </div>
      <ChevronDown className={cn('w-4.5 h-4.5 text-secondary-foreground', { 'text-white': darkBg })} />
    </div>
  )
}
