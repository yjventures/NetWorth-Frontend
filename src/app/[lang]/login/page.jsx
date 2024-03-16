import { Button } from '@/components/ui/button'
import LLink from '@/components/ui/llink'
import Typography from '@/components/ui/typography'
import { ChevronLeft, Lock, Mail } from 'lucide-react'
import { Input } from 'postcss'

export default function LoginPage() {
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

      <form className='space-y-6'>
        <Input icon={<Mail />} placeholder='Your Email Address' />
        <Input icon={<Lock />} placeholder='********' type='password' />
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
