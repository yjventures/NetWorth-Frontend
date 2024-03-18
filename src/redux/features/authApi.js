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
        url: '/verify-email',
        method: 'POST',
        body: payload
      })
    }),
    login: build.mutation({
      query: payload => ({
        url: '/user/login',
        method: 'POST',
        body: payload
      })
    }),
    verifyLogin: build.mutation({
      query: payload => ({
        url: '/user/verify-login',
        method: 'POST',
        body: payload
      })
    })
  })
})

export const { useSignUpMutation, useVerifySignupMutation, useLoginMutation, useVerifyLoginMutation } = authApi
