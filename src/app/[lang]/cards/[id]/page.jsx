'use client'

import BackLink from '@/components/common/rootLayout/BackLink'
import CardDetails from '@/components/common/rootLayout/CardDetails'
import { Button } from '@/components/ui/button'
import LLink from '@/components/ui/llink'
import Typography from '@/components/ui/typography'
import { useGetCardQuery } from '@/redux/features/cardsApi'
import { useParams } from 'next/navigation'

export default function CardDetailsPage() {
  const { id } = useParams()
  const { data } = useGetCardQuery(id)
  return (
    <div className='py-10 container max-w-md'>
      <div className='flex items-center gap-6'>
        <BackLink href='/profile' />
        <Typography variant='h3' className='font-medium'>
          Your Card
        </Typography>
      </div>

      <CardDetails data={data?.data} />

      <div className='grid grid-cols-2 gap-5 mt-6'>
        <LLink href={`/cards/edit/${data?.data?._id}`}>
          <Button className='w-full'>Edit</Button>
        </LLink>
        <Button variant='destructive'>Delete</Button>
      </div>
    </div>
  )
}
