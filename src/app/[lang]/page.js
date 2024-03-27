'use client'

import HomepageContainer from '@/components/pages/homepage/HomepageContainer'
import HomepageSlider from '@/components/pages/homepage/HomepageSlider'
import { getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'

export default function Home() {
  const [hasAuth, sethasAuth] = useState(false)

  useEffect(() => {
    const token = getCookie('accessToken')
    if (token) sethasAuth(true)
    else sethasAuth(false)
  }, [])

  return <main className='container'>{hasAuth ? <HomepageContainer /> : <HomepageSlider />}</main>
}
