'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import LLink from '@/components/ui/llink'
import { Switch } from '@/components/ui/switch'
import Typography from '@/components/ui/typography'
import usePush from '@/hooks/usePush'
import { useLoginMutation } from '@/redux/features/authApi'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { ChevronLeft, Lock, Mail } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function LoginPage() {
  const push = usePush()
  const params = useSearchParams()
  const email = params.has('email') && params.get('email')
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    if (email) setValue('email', email)
  }, [email, setValue])

  const [rememberMe, setrememberMe] = useState(false)

  const [login, { isSuccess, isError, error }] = useLoginMutation()

  const onSubmit = data => {
    login(data)
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('Login successfully!')
      push(`/login/verify?email=${email || getValues('email')}&rememberMe=${rememberMe}`)
    }
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error, email, getValues, push, rememberMe])

  return (
    <div className='py-10 container'>
      <LLink href='/'>
        <Button variant='icon' className='shadow-sm px-3 h-10 rounded-lg'>
          <ChevronLeft className='size-6' />
        </Button>
      </LLink>

      <Typography variant='h1' className='font-medium pt-20'>
        Login your
      </Typography>
      <Typography variant='h1' className='font-medium pt-1 pb-10'>
        Account
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
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
        <div className='flex items-center justify-between pb-8'>
          <div className='flex items-center space-x-2'>
            <Switch id='remember-me' checked={rememberMe} onCheckedChange={setrememberMe} />
            <Label htmlFor='remember-me'>Remember Me</Label>
          </div>

          <LLink href='/forgot-password' className='text-muted-foreground text-sm'>
            Forgot Password?
          </LLink>
        </div>
        <div className='space-y-2.5'>
          <Button className='w-full'>Login</Button>
          <div className='flex items-center justify-center space-x-3'>
            <p className='text-muted-foreground'>Don&apos;t have an account?</p>
            <LLink href='/signup' className='text-blue-600'>
              Sign Up
            </LLink>
          </div>
        </div>
      </form>
    </div>
  )
}
