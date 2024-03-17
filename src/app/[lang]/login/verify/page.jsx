'use client'

import { Button } from '@/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import LLink from '@/components/ui/llink'
import Typography from '@/components/ui/typography'
import usePush from '@/hooks/usePush'
import { useVerifyLoginMutation } from '@/redux/features/authApi'
import { calculateTokenExpiration } from '@/utils/auth/calculateTokenExpiration'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { setCookie } from 'cookies-next'
import { ChevronLeft } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Fragment, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function LoginVerifyPage() {
  const push = usePush()
  const params = useSearchParams()
  const email = params.has('email') && params.get('email')
  const rememberMe = params.has('rememberMe') && params.get('rememberMe')
  const [otp, setotp] = useState('')

  const [verifyLogin, { isSuccess, isError, error, data }] = useVerifyLoginMutation()

  useEffect(() => {
    if (isSuccess) {
      toast.success('Email verified successfully!')
      if (data?.status) {
        const { accessToken, refreshToken, data: userData } = { ...data }
        if (rememberMe === 'true') {
          setCookie('refreshToken', refreshToken, { maxAge: calculateTokenExpiration(refreshToken) })
          setCookie('accessToken', accessToken, { maxAge: calculateTokenExpiration(accessToken) })
          setCookie('userData', JSON.stringify(userData), {
            maxAge: calculateTokenExpiration(refreshToken)
          })
        } else {
          setCookie('refreshToken', refreshToken)
          setCookie('accessToken', accessToken)
          setCookie('userData', JSON.stringify(userData))
        }
        push('/signup/personal-info')
      }
    }
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error, email, push, rememberMe, data])

  return (
    <div className='py-10 container'>
      <LLink href='/'>
        <Button variant='icon' className='shadow-sm px-3 h-10 rounded-lg'>
          <ChevronLeft className='size-6' />
        </Button>
      </LLink>

      <div className='flex flex-col items-center justify-center mt-20 rounded-3xl bg-gray-100 border border-gray-200 shadow-sm px-6 py-10'>
        <Typography variant='h3' className='font-medium'>
          Verify Login
        </Typography>
        <p className='text-muted-foreground text-sm mt-3'>We Have Sent Code To Your email</p>

        <p className='font-medium text-[15px] mt-10 mb-8'>{email}</p>

        <InputOTP
          value={otp}
          onChange={value => setotp(value)}
          maxLength={4}
          render={({ slots }) => (
            <InputOTPGroup className='gap-2'>
              {slots.map((slot, index) => (
                <Fragment key={index}>
                  <InputOTPSlot className='!rounded-2xl border border-gray-400 shadow-sm p-7 text-3xl' {...slot} />
                  {index !== slots.length - 1 && <div className='px-1' />}
                </Fragment>
              ))}
            </InputOTPGroup>
          )}
        />

        <Button className='w-full rounded-2xl mt-12' onClick={() => verifyLogin({ email, otp })}>
          Verify
        </Button>
        {/* <Button className='w-full rounded-2xl' variant='tartiary'>
          Send Again
        </Button> */}
      </div>
    </div>
  )
}
