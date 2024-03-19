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
      })
    })
  })
})

export const { useOCRMutation, useCreateEmptyCardMutation, useUpdateCardMutation } = cardsApi
