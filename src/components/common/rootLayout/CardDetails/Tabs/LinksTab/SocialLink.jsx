/* eslint-disable @next/next/no-img-element */
'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useGetMetaDataQuery } from '@/redux/features/linksApi'

export default function SocialLink({ link, platform }) {
  const { data, isLoading, isSuccess } = useGetMetaDataQuery(link)
  return (
    <>
      {isLoading ? <Skeleton className='w-full h-40' /> : null}
      {isSuccess ? (
        <a href={data?.url} target='_blank' className='flex items-start gap-x-3 shadow-lg p-2 rounded-lg'>
          {data?.image ? (
            <img src={data?.image} alt={data?.title} className='width-20 h-auto min-w-20' width={80} height={80} />
          ) : null}

          <div className='w-auto space-y-1.5'>
            <p className='text-sm font-semibold'>{platform}</p>
            <p className='text-sm font-medium'>{data?.title}</p>
            <p className='text-xs text-gray-600 font-medium'>{data?.description}</p>
            <p className='text-xs text-sky-700 break-words break-all font-medium'>{data?.url}</p>
          </div>
        </a>
      ) : null}
    </>
  )
}
