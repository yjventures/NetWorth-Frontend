'use client'

import BackLink from '@/components/common/rootLayout/BackLink'
import CardDetails from '@/components/common/rootLayout/CardDetails'
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
    </div>
  )
}
