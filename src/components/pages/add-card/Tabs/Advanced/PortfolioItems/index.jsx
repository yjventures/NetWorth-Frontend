'use client'

import addActivityImg from '@/assets/images/add-card/add-activity.png'
import SingleAccordion from '@/components/pages/common/SingleAccordion'
import { Button } from '@/components/ui/button'
import { Img } from '@/components/ui/img'
import LLink from '@/components/ui/llink'
import { useGetActivitiesQuery } from '@/redux/features/activitiesApi'
import { getCookie } from 'cookies-next'

export default function PortfolioItems() {
  const { data } = useGetActivitiesQuery(getCookie('cardId'))
  console.log(data)
  return (
    <section>
      <SingleAccordion label='Portfolio Items' value='portfolio'>
        {!data?.data?.length ? (
          <div className='flex flex-col items-center justify-center w-full gap-6 mt-5'>
            <Img src={addActivityImg} alt='add-activity' className='max-w-sm w-3/4' width='100vw' sizes='100vw' />
            <p className='text-2xl font-light'>Add an activity?</p>
            <LLink href={`/add-activity?from=add-card`} className='w-full'>
              <Button variant='tartiary' className='w-full'>
                Add an activity
              </Button>
            </LLink>
          </div>
        ) : null}
      </SingleAccordion>
    </section>
  )
}
