'use client'

import PortfolioItem from '@/components/pages/add-card/Tabs/Advanced/PortfolioItems/PortfolioItem'
import { Button } from '@/components/ui/button'
import LLink from '@/components/ui/llink'
import Typography from '@/components/ui/typography'
import { useGetActivitiesQuery } from '@/redux/features/activitiesApi'

export default function Activities({ cardId }) {
  const { data, isSuccess } = useGetActivitiesQuery(cardId)
  console.log(data?.data)
  return (
    <div className='px-5'>
      <Typography variant='h3'>Activities</Typography>
      {isSuccess ? (
        <>
          <div className='flex flex-col items-center justify-center gap-y-5 w-full mb-5'>
            {data?.data?.map(activity => (
              <PortfolioItem key={activity?._id} activity={activity} />
            ))}
          </div>
          {!data?.data?.length ? (
            <div className='mb-5'>
              <p className='italic text-muted-foreground mb-5 text-sm'>No activity added yet</p>
              <LLink href={`/activities/add?from=card-details&cardId=${cardId}`} className='w-full'>
                <Button className='w-full'>Add new activity</Button>
              </LLink>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  )
}
