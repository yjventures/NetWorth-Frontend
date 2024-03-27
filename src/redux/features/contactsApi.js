import api from '@/redux/api/apiSlice'

const contactsApi = api.injectEndpoints({
  endpoints: build => ({
    searchContacts: build.query({
      query: params => ({
        url: '/search',
        params
      })
    }),
    sendRequest: build.mutation({
      query: payload => ({
        url: '/user/send-request',
        method: 'PUT',
        body: payload
      }),
      invalidatesTags: ['outgoingRequests']
    })
  })
})

export const { useSearchContactsQuery, useSendRequestMutation } = contactsApi
