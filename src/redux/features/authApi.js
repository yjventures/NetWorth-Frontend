import api from '@/redux/api/apiSlice'

const authApi = api.injectEndpoints({
  endpoints: build => ({
    signUp: build.mutation({
      query: payload => ({
        url: '/signup',
        method: 'POST',
        body: payload
      })
    }),
    verifySignup: build.mutation({
      query: payload => ({
        url: '/varify-email',
        method: 'POST',
        body: payload
      })
    })
  })
})

export const { useSignUpMutation, useVerifySignupMutation } = authApi
