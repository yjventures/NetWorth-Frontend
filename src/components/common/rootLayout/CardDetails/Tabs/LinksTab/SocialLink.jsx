/* eslint-disable @next/next/no-img-element */
'use client'

import { API_URL } from '@/configs'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function SocialLink({ link, platform }) {
  const [data, setdata] = useState({})
  useEffect(() => {
    const fetchMetaData = async () => {
      const metadata = await axios.get(`${API_URL}/url-metadata?url=${link}`)
      setdata(metadata?.data)
    }
    if (link) {
      fetchMetaData()
    }
  }, [link])

  return (
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
  )
}
