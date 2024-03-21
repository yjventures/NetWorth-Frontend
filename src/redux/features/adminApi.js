import api from '@/redux/api/apiSlice'

const rootApi = '/admin'

const adminApi = api.injectEndpoints({
  endpoints: build => ({
    adminLogin: build.mutation({
      query: payload => ({
        url: `${rootApi}/login`,
        method: 'POST',
        body: payload
      })
    }),
    getAllUsers: build.query({
      query: () => ({
        url: `${rootApi}/users`
      }),
      providesTags: ['users']
    })
  })
})

export const { useAdminLoginMutation, useGetAllUsersQuery } = adminApi
