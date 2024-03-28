import api from '@/redux/api/apiSlice'

const cardsApi = api.injectEndpoints({
  endpoints: build => ({
    OCR: build.mutation({
      query: payload => ({
        url: '/analyze-document',
        method: 'POST',
        body: payload
      })
    }),
    createEmptyCard: build.mutation({
      query: () => ({
        url: '/user/card',
        method: 'POST'
      })
    }),
    updateCard: build.mutation({
      query: ({ payload, id }) => ({
        url: `/user/card/${id}`,
        method: 'PUT',
        body: payload
      }),
      invalidatesTags: ['card', 'cards']
    }),
    updateCardStatus: build.mutation({
      query: ({ cardId, payload }) => ({
        url: `/user/card-status/${cardId}`,
        method: 'PUT',
        body: { status: payload }
      }),
      invalidatesTags: ['card']
    }),
    getAllCards: build.query({
      query: () => ({
        url: '/user/card'
      }),
      providesTags: ['cards']
    }),
    getCard: build.query({
      query: id => ({
        url: `/user/card/${id}`
      }),
      providesTags: ['card']
    }),
    deleteCard: build.mutation({
      query: id => ({
        url: `/user/card/${id}`,
        method: 'DELETE'
      }),
      providesTags: ['cards']
    }),
    getFeed: build.query({
      query: cardId => ({
        url: `/card/${cardId}/feed`
      })
    })
  })
})

export const {
  useOCRMutation,
  useCreateEmptyCardMutation,
  useUpdateCardMutation,
  useGetAllCardsQuery,
  useGetCardQuery,
  useDeleteCardMutation,
  useUpdateCardStatusMutation,
  useGetFeedQuery
} = cardsApi
