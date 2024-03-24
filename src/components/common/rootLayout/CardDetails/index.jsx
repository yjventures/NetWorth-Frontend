'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import CardHeader from './CardHeader'
import CardUserInfo from './CardUserInfo'
import CondensedHeaderContent from './CondensedHeaderContent'
import FullviewHeaderContent from './FullviewHeaderContent'
import FullviewUserInfo from './FullviewUserInfo'

export default function CardDetails({ data, className }) {
  const [view, setview] = useState('condensed')
  return (
    <section className={cn('rounded-2xl overflow-hidden mt-5 bg-white', className)}>
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
        </>
      )}
    </section>
  )
}
