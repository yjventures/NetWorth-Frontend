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
    }),
    deleteUser: build.mutation({
      query: userId => ({
        url: `${rootApi}/users/${userId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['users']
    })
  })
})

export const { useAdminLoginMutation, useGetAllUsersQuery, useDeleteUserMutation } = adminApi
