import { API_URL } from '@/configs'
import { calculateTokenExpiration } from '@/utils/auth/calculateTokenExpiration'
import { getToken } from '@/utils/auth/getToken'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'
import { getCookie, setCookie } from 'cookies-next'
import toast from 'react-hot-toast'

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  args.headers = {
    ...args.headers,
    Authorization: `Bearer ${getToken()}`
  }

  const refreshToken = getCookie('refreshToken')
  let result = await baseQuery(args, api, extraOptions)

  if (result?.error?.status === 401) {
    const refreshResult = await axios.post(`${API_URL}/access-token`, {
      refreshToken: `Bearer ${refreshToken}`
    })

    if (refreshResult?.data?.accessToken) {
      const newAccessToken = refreshResult?.data?.accessToken
      const accessTokenExpiration = calculateTokenExpiration(newAccessToken)
      setCookie('accessToken', newAccessToken, {
        maxAge: accessTokenExpiration
      })
      result = await baseQuery(args, api, extraOptions)
    } else {
      toast.error('Please login again!')
    }
  }

  return result
}

const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: [
    'personal_info',
    'card',
    'cards',
    'activities',
    'activity',
    'links',
    'users',
    'outgoingRequests',
    'incomingRequests'
  ],
  endpoints: () => ({})
})

export default api
