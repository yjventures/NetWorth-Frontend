'use client'

import BackLink from '@/components/common/rootLayout/BackLink'
import OutgoingReqeustCard from '@/components/pages/requests/outgoing/OutgoingRequestCard'
import { Skeleton } from '@/components/ui/skeleton'
import Typography from '@/components/ui/typography'
import { useGetOutgoingRequestsQuery } from '@/redux/features/contactsApi'
import { Search } from 'lucide-react'
import { useParams } from 'next/navigation'

export default function OutgoingRequestsPage() {
  const { cardId } = useParams()
  const { data, isLoading, isSuccess } = useGetOutgoingRequestsQuery(cardId)
  return (
    <section className='py-10 container'>
      <div className='flex gap-3 items-center justify-between'>
        <div className='flex items-center gap-3'>
          <BackLink href={`/connections/${cardId}`} />
          <Typography variant='h3' className='font-semibold'>
            Outgoing requests
          </Typography>
        </div>

        <Search />
      </div>

      {isLoading ? (
        <div className='grid grid-cols-2 gap-5 pt-6'>
          {[
            ...Array(6)
              .fill()
              .map((_, i) => <Skeleton key={i} className='w-full h-64' />)
          ]}
        </div>
      ) : null}

      {isSuccess ? (
        <div className='grid grid-cols-2 gap-5 pt-6'>
          {data?.data?.outgoing_friend_request?.map(card => (
            <OutgoingReqeustCard key={card?._id} card={card} cardId={cardId} />
          ))}
        </div>
      ) : null}
    </section>
  )
}
