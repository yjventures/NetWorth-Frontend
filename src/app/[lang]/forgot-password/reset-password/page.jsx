'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import LLink from '@/components/ui/llink'
import Typography from '@/components/ui/typography'
import { signupPasswordRegex } from '@/configs/auth'
import usePush from '@/hooks/usePush'
import { useSetNewPasswordMutation } from '@/redux/features/authApi'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { ChevronLeft, Lock } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function ResetPasswordPage() {
  const params = useSearchParams()
  const OTP = params.has('otp') && params.get('otp')
  const email = params.has('email') && params.get('email')
  const push = usePush()
  const [isPasswordInvalid, setisPasswordInvalid] = useState(false)

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    const inputPassword = watch('password')
    if (inputPassword && !signupPasswordRegex.test(inputPassword)) {
      setisPasswordInvalid(true)
    } else {
      setisPasswordInvalid(false)
    }
  }, [watch('password')])

  const [setNewPassword, { isSuccess, isError, error }] = useSetNewPasswordMutation()

  const onSubmit = data => {
    const { password, repeatPassword } = data

    if (password !== repeatPassword) {
      toast.error('Passwords do not match')
      return
    }

    setNewPassword({ email, OTP, password })
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('Password reset successfully!')
      push('/login')
    }

    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error, push])

  return (
    <div className='py-10 container max-w-md'>
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
        {isPasswordInvalid ? (
          <p className='text-red-500 text-xs pb-3'>
            Password must have at least one lowercase letter, one uppercase letter, one digit, one special character,
            and be 8-15 characters long.
          </p>
        ) : null}
        <Input
          icon={<Lock />}
          placeholder='Repeat New Password'
          type='password'
          name='repeatPassword'
          register={register}
          errors={errors}
          label='Repeat Password'
          required
          className='rounded-2xl'
        />

        <Button className='w-full rounded-2xl' type='submit'>
          Reset Password
        </Button>
      </form>
    </div>
  )
}
