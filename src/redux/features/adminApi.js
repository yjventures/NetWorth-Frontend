import api from '@/redux/api/apiSlice'

const adminApi = api.injectEndpoints({
  endpoints: build => ({
    adminLogin: build.mutation({
      query: payload => ({
        url: '/admin/login',
        method: 'POST',
        body: payload
      })
    })
  })
})

export const { useAdminLoginMutation } = adminApi
