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
    deleteLink: build.mutation({
      query: linkId => ({
        url: `/user/link/${linkId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['links']
    })
  })
})

export const { useGetLinksQuery, useCreateLinkMutation, useGetMetaDataQuery, useDeleteLinkMutation } = linksApi
