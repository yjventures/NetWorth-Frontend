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
        url: '/card/send-request',
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
    }),
    acceptIncomingRequest: build.mutation({
      query: payload => ({
        url: `/card/accept-request`,
        method: 'PUT',
        body: payload
      }),
      invalidatesTags: ['incomingRequests']
    }),
    cancelIncomingRequest: build.mutation({
      query: payload => ({
        url: `/card/cancel-incoming-request`,
        method: 'PUT',
        body: payload
      }),
      invalidatesTags: ['incomingRequests']
    }),
    cancelOutgoingRequest: build.mutation({
      query: payload => ({
        url: `/card/cancel-outgoing-request`,
        method: 'PUT',
        body: payload
      }),
      invalidatesTags: ['outgoingRequests']
    })
  })
})

export const {
  useSearchContactsQuery,
  useSendRequestMutation,
  useGetIncomingRequestsQuery,
  useGetOutgoingRequestsQuery,
  useAcceptIncomingRequestMutation,
  useCancelIncomingRequestMutation,
  useCancelOutgoingRequestMutation
} = contactsApi
