'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import LLink from '@/components/ui/llink'
import Typography from '@/components/ui/typography'
import { ChevronLeft, Lock } from 'lucide-react'
import { useForm } from 'react-hook-form'

export default function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    console.log(data)
  }
  return (
    <div className='py-10 container'>
      <LLink href='/forgot-password/verify'>
        <Button variant='icon' className='shadow-sm px-3 h-10 rounded-lg'>
          <ChevronLeft className='size-6' />
        </Button>
      </LLink>

      <Typography variant='h1' className='font-medium pt-20'>
        Reset your
      </Typography>
      <Typography variant='h1' className='font-medium pt-1 pb-10'>
        Password
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          icon={<Lock />}
          placeholder='New Password'
          type='password'
          name='password'
          register={register}
          errors={errors}
          label='Password'
          required
          className='rounded-2xl'
        />
        <Input
          icon={<Lock />}
          placeholder='Repeat New Password'
          type='password'
          name='repeat-password'
          register={register}
          errors={errors}
          label='Repeat Password'
          required
          className='rounded-2xl'
        />

        <Button className='w-full rounded-2xl'>Reset Password</Button>
      </form>
    </div>
  )
}
