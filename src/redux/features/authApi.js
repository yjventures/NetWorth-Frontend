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
    }),
    verifyForgotEmail: build.query({
      query: email => ({
        url: `/recover-verify-email/${email}`
      })
    }),
    verifyForgotOTP: build.query({
      query: ({ email, otp }) => ({
        url: `/recover-verify-email/${email}/${otp}`
      })
    }),
    setNewPassword: build.mutation({
      query: payload => ({
        url: '/recover-reset-password',
        method: 'POST',
        body: payload
      })
    })
  })
})

export const {
  useSignUpMutation,
  useVerifySignupMutation,
  useLoginMutation,
  useVerifyLoginMutation,
  useVerifyForgotEmailQuery,
  useVerifyForgotOTPQuery,
  useSetNewPasswordMutation
} = authApi
