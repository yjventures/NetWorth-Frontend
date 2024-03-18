import api from '@/redux/api/apiSlice'

const cardsApi = api.injectEndpoints({
  endpoints: build => ({
    OCR: build.mutation({
      query: payload => ({
        url: '/analyze-document',
        method: 'POST',
        body: payload
      })
    })
  })
})

export const { useOCRMutation } = cardsApi
