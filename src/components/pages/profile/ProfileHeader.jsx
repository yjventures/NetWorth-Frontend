'use client'

import avatar from '@/assets/images/common/avatar.png'
import { Img } from '@/components/ui/img'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetPersonalInfoQuery } from '@/redux/features/usersApi'

export default function ProfileHeader() {
  const { data, isLoading, isSuccess } = useGetPersonalInfoQuery()
  const userInfo = data?.data?.user.personal_info
  return (
    <div>
      {isLoading ? (
        <div className='flex flex-col gap-y-3 py-10 items-center justify-center'>
          <Skeleton className='size-32 rounded-full' />
          <Skeleton className='w-60 h-7' />
          <Skeleton className='w-60 h-24' />
        </div>
      ) : null}
      {isSuccess ? (
        <div className='flex flex-col gap-y-3 py-10 items-center justify-center'>
          <div className='relative'>
            {userInfo?.profile_image ? (
              <Img
                src={userInfo?.profile_image}
                alt='User photo'
                className='size-32 object-cover rounded-full'
                sizes='150px'
                width={150}
              />
            ) : (
              <Img
                src={avatar}
                alt='User photo'
                className='size-32 object-cover rounded-full'
                sizes='150px'
                width={150}
              />
            )}
            <div className='size-3 rounded-full bg-green-500 absolute bottom-[14px] right-[14px]' />
          </div>
          <p className='font-medium'>{userInfo?.name}</p>
          <p className='text-sm text-muted-foreground italic font-medium'>{userInfo?.bio}</p>
        </div>
      ) : null}
    </div>
  )
}
