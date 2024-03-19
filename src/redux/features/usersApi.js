import api from '@/redux/api/apiSlice'

const usersApi = api.injectEndpoints({
  endpoints: build => ({
    getPersonalInfo: build.query({
      query: () => ({
        url: '/user/personal-info'
      }),
      providesTags: ['personal_info']
    }),
    updatePersoanlInfo: build.mutation({
      query: payload => ({
        url: '/user/personal-info',
        method: 'PUT',
        body: payload
      }),
      invalidatesTags: ['personal_info']
    })
  })
})

export const { useGetPersonalInfoQuery, useUpdatePersoanlInfoMutation } = usersApi
