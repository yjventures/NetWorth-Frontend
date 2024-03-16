'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import LLink from '@/components/ui/llink'
import Typography from '@/components/ui/typography'
import { ChevronLeft, Lock, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'

export default function SignupPage() {
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
        Create your
      </Typography>
      <Typography variant='h1' className='font-medium pt-1 pb-10'>
        Account
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          icon={<User />}
          placeholder='Full Name'
          name='name'
          register={register}
          errors={errors}
          label='Name'
          required
        />
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
        <div className='space-y-2.5'>
          <Button className='w-full' type='submit'>
            Register
          </Button>
          <div className='flex items-center justify-center space-x-3'>
            <p className='text-muted-foreground'>Already have an account?</p>
            <LLink href='/login' className='text-blue-600'>
              Sign In
            </LLink>
          </div>
        </div>
      </form>
    </div>
  )
}
