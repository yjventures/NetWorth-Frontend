import api from '@/redux/api/apiSlice'

const activitiesApi = api.injectEndpoints({
  endpoints: build => ({
    getActivities: build.query({
      query: cardId => ({
        url: `/user/card/${cardId}/activity`
      }),
      providesTags: ['activities']
    }),
    createActivity: build.mutation({
      query: ({ cardId, payload }) => ({
        url: `/user/card/${cardId}/activity`,
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['activities']
    })
  })
})

export const { useGetActivitiesQuery, useCreateActivityMutation } = activitiesApi
