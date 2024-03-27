'use client'

import PortfolioItem from '@/components/pages/add-card/Tabs/Advanced/PortfolioItems/PortfolioItem'
import { Button } from '@/components/ui/button'
import LLink from '@/components/ui/llink'
import { Skeleton } from '@/components/ui/skeleton'
import Typography from '@/components/ui/typography'
import { useGetActivitiesQuery } from '@/redux/features/activitiesApi'

export default function Activities({ cardId }) {
  const { data, isSuccess, isLoading } = useGetActivitiesQuery(cardId)
  return (
    <div className='px-5 pt-5'>
      <Typography variant='h3' className='mb-4'>
        Activities
      </Typography>
      {isLoading ? (
        <div className='space-y-5'>
          {[...Array(5).fill()].map((_, i) => (
            <Skeleton key={i} className='w-full h-40 rounded-xl' />
          ))}
        </div>
      ) : null}
      {isSuccess ? (
        <>
          <div className='flex flex-col items-center justify-center gap-y-5 w-full mb-5'>
            {data?.data?.map(activity => (
              <PortfolioItem key={activity?._id} activity={activity} />
            ))}
          </div>
          {!data?.data?.length ? (
            <p className='italic text-muted-foreground mb-5 text-sm'>No activity added yet</p>
          ) : null}
          <LLink href={`/activities/add?from=card-details&cardId=${cardId}`} className='w-full mb-5 inline-block'>
            <Button className='w-full'>Add new portfolio</Button>
          </LLink>
        </>
      ) : null}
    </div>
  )
}
