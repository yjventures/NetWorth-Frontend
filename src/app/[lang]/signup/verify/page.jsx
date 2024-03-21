'use client'

import { Button } from '@/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import LLink from '@/components/ui/llink'
import Typography from '@/components/ui/typography'
import usePush from '@/hooks/usePush'
import { useVerifySignupMutation } from '@/redux/features/authApi'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { ChevronLeft } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Fragment, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function SignUpEmailVerifyPage() {
  const push = usePush()
  const params = useSearchParams()
  const email = params.has('email') && params.get('email')
  const [otp, setotp] = useState('')

  const [verifySignUp, { isSuccess, isError, error }] = useVerifySignupMutation()

  useEffect(() => {
    if (isSuccess) {
      toast.success('Email verified successfully!')
      push(`/login?email=${email}`)
    }
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error, email, push])

  return (
    <div className='py-10 container max-w-xl'>
      <LLink href='/'>
        <Button variant='icon' className='shadow-sm px-3 h-10 rounded-lg'>
          <ChevronLeft className='size-6' />
        </Button>
      </LLink>

      <div className='flex flex-col items-center justify-center mt-20 rounded-3xl bg-gray-100 border border-gray-200 shadow-sm px-6 py-10'>
        <Typography variant='h3' className='font-medium'>
          Verify your email
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

        <Button className='w-full rounded-2xl mt-12' onClick={() => verifySignUp({ email, otp })}>
          Verify
        </Button>
      </div>
    </div>
  )
}
