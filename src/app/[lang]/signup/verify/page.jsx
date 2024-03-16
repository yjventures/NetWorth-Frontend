'use client'

import { Button } from '@/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import LLink from '@/components/ui/llink'
import Typography from '@/components/ui/typography'
import { ChevronLeft } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Fragment, useState } from 'react'

export default function SignUpEmailVerifyPage() {
  const params = useSearchParams()
  const email = params.has('email') && params.get('email')
  const [otp, setotp] = useState('')
  console.log(otp)
  return (
    <div className='py-10 container'>
      <LLink href='/'>
        <Button variant='icon' className='shadow-sm px-3 h-10 rounded-lg'>
          <ChevronLeft className='size-6' />
        </Button>
      </LLink>

      <div className='flex flex-col items-center justify-center mt-20 rounded-2xl bg-gray-100 shadow-md px-6 py-10'>
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

        <Button className='w-full rounded-2xl mt-12 mb-3'>Verify</Button>
        <Button className='w-full rounded-2xl' variant='tartiary'>
          Send Again
        </Button>
      </div>
    </div>
  )
}
