'use client'

import { Button } from '@/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import LLink from '@/components/ui/llink'
import Typography from '@/components/ui/typography'
import { API_URL } from '@/configs'
import usePush from '@/hooks/usePush'
import { errorMessage } from '@/utils/error/errorMessage'
import axios from 'axios'
import { ChevronLeft } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Fragment, useState } from 'react'
import toast from 'react-hot-toast'

export default function ResetPasswordVerifyPage() {
  const push = usePush()
  const params = useSearchParams()
  const email = params.has('email') && params.get('email')
  const [otp, setotp] = useState('')

  const verifyOtp = async e => {
    e.preventDefault()

    try {
      const response = await axios.get(`${API_URL}/recover-verify-otp/${email}/${otp}`)
      if (response?.data?.status) {
        toast.success('Verified OTP Successfully!')
        setTimeout(() => {
          push(`/forgot-password/reset-password?otp=${otp}&email=${email}`)
        }, 500)
      } else {
        toast.error(response?.data?.data)
      }
    } catch (error) {
      toast.error(errorMessage(error))
    }
  }
  return (
    <div className='py-10 container'>
      <LLink href='/forgot-password'>
        <Button variant='icon' className='shadow-sm px-3 h-10 rounded-lg'>
          <ChevronLeft className='size-6' />
        </Button>
      </LLink>

      <form
        onSubmit={verifyOtp}
        className='flex flex-col items-center justify-center mt-20 rounded-3xl bg-gray-100 border border-gray-200 shadow-sm px-6 py-10'
      >
        <Typography variant='h3' className='font-medium'>
          Verify Your Email
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

        <Button className='w-full rounded-2xl mt-12' type='submit'>
          Verify
        </Button>
        {/* <Button className='w-full rounded-2xl' variant='tartiary'>
          Send Again
        </Button> */}
      </form>
    </div>
  )
}
