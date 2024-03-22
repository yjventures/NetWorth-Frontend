'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Typography from '@/components/ui/typography'
import usePush from '@/hooks/usePush'
import { useAdminLoginMutation } from '@/redux/features/adminApi'
import { calculateTokenExpiration } from '@/utils/auth/calculateTokenExpiration'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { setCookie } from 'cookies-next'
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

  const [login, { isSuccess, isError, error, data }] = useAdminLoginMutation()

  const onSubmit = data => {
    login(data)
  }

  useEffect(() => {
    if (isSuccess) {
      const { accessToken } = { ...data }
      toast.success('Logged in successfully!')
      //setCookie('refreshToken', refreshToken, { maxAge: calculateTokenExpiration(refreshToken) })
      setCookie('accessToken', accessToken, { maxAge: calculateTokenExpiration(accessToken) })
      // setCookie('userData', JSON.stringify(userData), {
      //   maxAge: calculateTokenExpiration(refreshToken)
      // })
      push('/admin/users')
    }
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error, push])

  return (
    <div className='h-dvh flex items-center justify-center container max-w-md'>
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
