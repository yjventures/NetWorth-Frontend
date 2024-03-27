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
    }),
    getIncomingRequests: build.query({
      query: cardId => ({
        url: `/card/${cardId}/incoming-request`
      }),
      providesTags: ['incomingRequests']
    }),
    getOutgoingRequests: build.query({
      query: cardId => ({
        url: `/card/${cardId}/outgoing-request`
      }),
      providesTags: ['outgoingRequests']
    })
  })
})

export const {
  useSearchContactsQuery,
  useSendRequestMutation,
  useGetIncomingRequestsQuery,
  useGetOutgoingRequestsQuery
} = contactsApi
