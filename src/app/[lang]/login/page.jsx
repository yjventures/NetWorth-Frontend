'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import LLink from '@/components/ui/llink'
import { Switch } from '@/components/ui/switch'
import Typography from '@/components/ui/typography'
import { ChevronLeft, Lock, Mail } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [rememberMe, setrememberMe] = useState(false)

  const onSubmit = data => {
    console.log(data, rememberMe)
  }
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