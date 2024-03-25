import api from '@/redux/api/apiSlice'

const linksApi = api.injectEndpoints({
  endpoints: build => ({
    getLinks: build.query({
      query: cardId => ({
        url: `/user/card/${cardId}/link`
      }),
      providesTags: ['links']
    }),
    createLink: build.mutation({
      query: ({ cardId, payload }) => ({
        url: `/user/card/${cardId}/link`,
        method: 'PUT',
        body: payload
      }),
      invalidatesTags: ['links']
    }),
    getMetaData: build.query({
      query: url => ({
        url: 'url-metadata',
        params: { url }
      })
    }),
    updateCardStatus: build.mutation({
      query: ({ cardId, payload }) => ({
        url: `/user/card-status/${cardId}`,
        method: 'PUT',
        body: payload
      }),
      invalidatesTags: ['card']
    })
  })
})

export const { useGetLinksQuery, useCreateLinkMutation, useGetMetaDataQuery, useUpdateCardStatusMutation } = linksApi
