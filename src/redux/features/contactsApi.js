import api from '@/redux/api/apiSlice'

const contactsApi = api.injectEndpoints({
  endpoints: build => ({
    searchContacts: build.query({
      query: params => ({
        url: 'search',
        params
      })
    })
  })
})

export const { useSearchContactsQuery } = contactsApi
