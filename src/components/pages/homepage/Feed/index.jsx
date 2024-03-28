'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useGetFeedQuery } from '@/redux/features/cardsApi'
import { useSelector } from 'react-redux'
import PortfolioItem from '../../add-card/Tabs/Advanced/PortfolioItems/PortfolioItem'

export default function Feed() {
  const { selectedCard } = useSelector(state => state.card)
  const { data, isLoading, isSuccess } = useGetFeedQuery(selectedCard)
  return (
    <section>
      <p className='text-sm font-medium'>Your Feed</p>

      {isLoading ? (
        <div className='space-y-5'>
          {[...Array(6).fill()].map((_, i) => (
            <Skeleton key={i} className='w-full h-40 rounded-xl' />
          ))}
        </div>
      ) : null}
      {isSuccess ? (
        <>
          <div className='flex flex-col items-center justify-center gap-y-5 w-full my-5'>
            {data?.data?.map(activity => (
              <PortfolioItem key={activity?._id} activity={activity} />
            ))}
          </div>
          {!data?.data?.length ? (
            <p className='italic text-muted-foreground mb-5 text-sm'>No portfolio added yet</p>
          ) : null}
        </>
      ) : null}
    </section>
  )
}
