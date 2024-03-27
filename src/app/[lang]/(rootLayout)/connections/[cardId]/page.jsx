'use client'

import BackLink from '@/components/common/rootLayout/BackLink'
import { Button } from '@/components/ui/button'
import LLink from '@/components/ui/llink'
import Typography from '@/components/ui/typography'
import { Search } from 'lucide-react'
import { useParams } from 'next/navigation'

export default function Connectionspage() {
  const { cardId } = useParams()
  return (
    <section className='py-10 container'>
      <div className='flex gap-3 items-center justify-between'>
        <div className='flex items-center gap-3'>
          <BackLink href='/' />
          <Typography variant='h3' className='font-semibold'>
            Your Connects
          </Typography>
        </div>

        <Search />
      </div>

      <div className='flex items-center justify-between py-5'>
        <LLink href={`/connections/incoming/${cardId}`}>
          <Button variant='default' className='rounded-lg h-12'>
            Incoming requests
          </Button>
        </LLink>
        <LLink href={`/connections/outgoing/${cardId}`}></LLink>
        <Button variant='tartiary' className='rounded-lg h-12'>
          Outgoing requests
        </Button>
      </div>
    </section>
  )
}
