'use client'

import Activities from '@/components/common/rootLayout/CardDetails/Activities'
import CardHeader from '@/components/common/rootLayout/CardDetails/CardHeader'
import CardUserInfo from '@/components/common/rootLayout/CardDetails/CardUserInfo'
import CondensedHeaderContent from '@/components/common/rootLayout/CardDetails/CondensedHeaderContent'
import FullviewHeaderContent from '@/components/common/rootLayout/CardDetails/FullviewHeaderContent'
import FullviewUserInfo from '@/components/common/rootLayout/CardDetails/FullviewUserInfo'
import { cn } from '@/lib/utils'
import { getCookie } from 'cookies-next'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function CardPreview({ className }) {
  const [view, setview] = useState('condensed')
  const cardId = getCookie('cardId')
  const { cardDetails: data } = useSelector(state => state.tempCard)
  return (
    <section className={cn('rounded-2xl overflow-hidden mt-5 bg-white shadow-md', className)}>
      {view === 'condensed' ? (
        <>
          <CardHeader data={data}>
            <CondensedHeaderContent data={data} />
          </CardHeader>
          <CardUserInfo data={data} setFullView={() => setview('full')} />
        </>
      ) : (
        <>
          <CardHeader data={data}>
            <FullviewHeaderContent data={data} />
          </CardHeader>
          <FullviewUserInfo data={data} setCondensedView={() => setview('condensed')} />
          <Activities cardId={cardId} />
        </>
      )}
    </section>
  )
}
