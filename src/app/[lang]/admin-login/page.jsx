'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Typography from '@/components/ui/typography'
import usePush from '@/hooks/usePush'
import { useAdminLoginMutation } from '@/redux/features/adminApi'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { Lock, Mail } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function AdminLoginPage() {
  const push = usePush()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [login, { isSuccess, isError, error }] = useAdminLoginMutation()

  const onSubmit = data => {
    login(data)
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('Logged in successfully!')
      push('/admin')
    }
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error, push])

  return (
    <div className='h-dvh flex items-center justify-center container'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
        <Typography variant='h1' className='mb-10 font-normal'>
          Admin Login
        </Typography>
        <Input
          icon={<Mail />}
          placeholder='Your Email Address'
          type='email'
          name='email'
          register={register}
          errors={errors}
          label='Email'
          required
        />
        <Input
          icon={<Lock />}
          placeholder='********'
          type='password'
          name='password'
          register={register}
          errors={errors}
          label='Password'
          required
        />
        <Button className='w-full' type='submit'>
          Login
        </Button>
      </form>
    </div>
  )
}
