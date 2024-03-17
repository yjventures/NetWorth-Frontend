import api from '@/redux/api/apiSlice'

const usersApi = api.injectEndpoints({
  endpoints: build => ({
    updatePersoanlInfo: build.mutation({
      query: payload => ({
        url: '/user/personal-info',
        method: 'PUT',
        body: payload
      })
    })
  })
})

export const { useUpdatePersoanlInfoMutation } = usersApi
