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

      <div className='flex items-center justify-between py-5 gap-3'>
        <LLink href={`/connections/incoming/${cardId}`}>
          <Button variant='default' className='rounded-xl h-11'>
            Incoming requests
          </Button>
        </LLink>
        <LLink href={`/connections/outgoing/${cardId}`}>
          <Button variant='tartiary' className='rounded-xl h-11'>
            Outgoing requests
          </Button>
        </LLink>
      </div>
    </section>
  )
}
