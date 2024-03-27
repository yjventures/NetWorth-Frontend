'use client'

import BackLink from '@/components/common/rootLayout/BackLink'
import IncomingReqeustCard from '@/components/pages/requests/incoming/IncomingReqeustCard'
import { Skeleton } from '@/components/ui/skeleton'
import Typography from '@/components/ui/typography'
import { useGetIncomingRequestsQuery } from '@/redux/features/contactsApi'
import { Search } from 'lucide-react'
import { useParams } from 'next/navigation'

export default function IncomingRequestsPage() {
  const { cardId } = useParams()
  const { data, isLoading, isSuccess } = useGetIncomingRequestsQuery(cardId)
  console.log(data?.data?.incoming_friend_request)
  return (
    <section className='py-10 container'>
      <div className='flex gap-3 items-center justify-between'>
        <div className='flex items-center gap-3'>
          <BackLink href={`/connections/${cardId}`} />
          <Typography variant='h3' className='font-semibold'>
            Incoming requests
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
          {data?.data?.incoming_friend_request?.map(card => (
            <IncomingReqeustCard key={card?._id} card={card} cardId={cardId} />
          ))}
        </div>
      ) : null}
    </section>
  )
}
