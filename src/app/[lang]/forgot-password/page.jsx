'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import LLink from '@/components/ui/llink'
import Typography from '@/components/ui/typography'
import { ChevronLeft, Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => console.log(data)
  return (
    <div className='py-10 container'>
      <LLink href='/'>
        <Button variant='icon' className='shadow-sm px-3 h-10 rounded-lg'>
          <ChevronLeft className='size-6' />
        </Button>
      </LLink>

      <Typography variant='h1' className='font-medium pt-20'>
        Forget Password
      </Typography>
      <p className='text-muted-foreground text-sm mt-3 text-balance'>
        Please enter your email address. You will receive an OTP in your email.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className='pt-10'>
        <Input
          icon={<Mail />}
          placeholder='Your Email Address'
          type='email'
          name='email'
          className='rounded-2xl'
          register={register}
          errors={errors}
          label='Email'
          required
        />

        <Button className='w-full rounded-2xl mb-3'>Next</Button>
      </form>
    </div>
  )
}
