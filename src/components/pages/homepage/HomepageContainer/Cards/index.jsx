'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import styles from '@/styles/pages/homepage.module.scss'
import Card from './Card'

export default function Cards({ isLoading, isSuccess, cards }) {
  return (
    <section className='py-5'>
      <p className='text-sm font-medium'>Your Cards</p>
      <div className={cn(styles.swipeContainer, 'flex gap-3 w-auto overflow-x-auto mt-5')}>
        {isLoading ? (
          <>
            {[
              ...Array(10)
                .fill()
                .map((_, i) => <Skeleton key={i} className='size-24 min-w-24' />)
            ]}
          </>
        ) : null}
        {isSuccess ? (
          <>
            {cards?.map(card => (
              <Card key={card?._id} card={card} />
            ))}
          </>
        ) : null}
      </div>
    </section>
  )
}
