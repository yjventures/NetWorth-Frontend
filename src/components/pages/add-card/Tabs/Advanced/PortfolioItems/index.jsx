'use client'

import addActivityImg from '@/assets/images/add-card/add-activity.png'
import SingleAccordion from '@/components/pages/common/SingleAccordion'
import { Button } from '@/components/ui/button'
import { Img } from '@/components/ui/img'
import LLink from '@/components/ui/llink'
import { useGetActivitiesQuery } from '@/redux/features/activitiesApi'
import { getCookie } from 'cookies-next'

export default function PortfolioItems() {
  const { data, isSuccess } = useGetActivitiesQuery(getCookie('cardId'))
  return (
    <section>
      <SingleAccordion label='Portfolio Items' value='portfolio'>
        {!data?.data?.length ? (
          <div className='flex flex-col items-center justify-center w-full gap-6 mt-5'>
            <Img src={addActivityImg} alt='add-activity' className='max-w-sm w-3/4' width='100vw' sizes='100vw' />
            <p className='text-2xl font-light'>Add an activity?</p>
            <LLink href={`/activities/add?from=add-card`} className='w-full'>
              <Button variant='tartiary' className='w-full'>
                Add an activity
              </Button>
            </LLink>
          </div>
        ) : null}
        {isSuccess ? (
          <div className='flex flex-col items-center justify-center gap-y-5 w-full mb-5'>
            {data?.data?.map(activity => (
              <div key={activity?.id} className='p-5 rounded-lg shadow-md w-full space-y-3 bg-gray-800'>
                <Img
                  src={activity?.attachments?.[0]}
                  alt={activity?.name}
                  className='max-w-sm mx-auto aspect-video object-cover'
                />
                <p className='text-xl pb-5 text-white'>{activity?.name}</p>
                <LLink href={`/activities/${activity?._id}`} className='w-full'>
                  <Button className='w-full  bg-secondary-foreground rounded-md'>View Details</Button>
                </LLink>
              </div>
            ))}
          </div>
        ) : null}
        {data?.data?.length ? (
          <LLink href={`/activities/add?from=add-card`} className='w-full'>
            <Button variant='tartiary' className='w-full'>
              Add another
            </Button>
          </LLink>
        ) : null}
      </SingleAccordion>
    </section>
  )
}
