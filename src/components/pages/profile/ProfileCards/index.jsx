'use client'

import { Skeleton } from '@/components/ui/skeleton'
import Typography from '@/components/ui/typography'
import { useGetAllCardsQuery } from '@/redux/features/cardsApi'
import ProfileCard from './ProfileCard'

export default function ProfileCards() {
  const { data, isSuccess, isLoading } = useGetAllCardsQuery()

  return (
    <div>
      <Typography variant='h5'>Your Cards</Typography>

      {isLoading ? (
        <div className='grid grid-cols-2 gap-6 mt-5'>
          {[...Array(6).keys()].map((_, i) => (
            <Skeleton key={i} className='w-full h-40' />
          ))}
        </div>
      ) : null}

      {isSuccess ? (
        <div className='flex flex-wrap gap-5 mt-5'>
          {data?.data?.cards?.map(card => (
            <ProfileCard key={card?._id} card={card} />
          ))}
        </div>
      ) : null}
    </div>
  )
}
