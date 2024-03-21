'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import LLink from '@/components/ui/llink'
import Typography from '@/components/ui/typography'
import { API_URL } from '@/configs'
import usePush from '@/hooks/usePush'
import { errorMessage } from '@/utils/error/errorMessage'
import axios from 'axios'
import { ChevronLeft, Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function ForgotPasswordPage() {
  const push = usePush()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    try {
      const response = await axios.get(`${API_URL}/recover-Verify-email/${data?.email}`)
      if (response?.data?.status) {
        toast.success('Sent OTP to your email!')
        setTimeout(() => {
          push(`/forgot-password/verify?email=${data?.email}`)
        }, 1000)
      } else {
        toast.error(response?.data?.data)
      }
    } catch (error) {
      toast.error(errorMessage(error))
    }
  }
  return (
    <div className='py-10 container max-w-md'>
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

        <Button className='w-full rounded-2xl mb-3' type='submit'>
          Next
        </Button>
      </form>
    </div>
  )
}
