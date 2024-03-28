'use client'

import HomepageContainer from '@/components/pages/homepage/HomepageContainer'
import HomepageSlider from '@/components/pages/homepage/HomepageSlider'
import { API_URL } from '@/configs'
import { calculateTokenExpiration } from '@/utils/auth/calculateTokenExpiration'
import { errorMessage } from '@/utils/error/errorMessage'
import axios from 'axios'
import { getCookie, setCookie } from 'cookies-next'
import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function Home() {
  const [isLoading, setisLoading] = useState(true)
  const [hasAuth, sethasAuth] = useState(false)

  const refreshToken = getCookie('refreshToken')

  const getNewAccessToken = useCallback(async () => {
    try {
      const data = await axios.post(`${API_URL}/user/access-token`, { refreshToken: `Bearer ${refreshToken}` })
      const accessToken = data?.data?.accessToken
      if (accessToken) {
        setCookie('accessToken', accessToken, { maxAge: calculateTokenExpiration(accessToken) })
        sethasAuth(true)
        setisLoading(false)
      }
    } catch (error) {
      toast.error(errorMessage(error))
    }
  }, [refreshToken])

  useEffect(() => {
    const token = getCookie('accessToken')
    if (token) {
      sethasAuth(true)
      setisLoading(false)
    } else {
      if (refreshToken) getNewAccessToken()
      else {
        sethasAuth(false)
        setisLoading(false)
      }
    }
  }, [refreshToken, getNewAccessToken])

  return (
    <main className='container'>
      {isLoading ? <p>Loading...</p> : <>{hasAuth ? <HomepageContainer /> : <HomepageSlider />}</>}
    </main>
  )
}
