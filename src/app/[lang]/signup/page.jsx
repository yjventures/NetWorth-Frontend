import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import LLink from '@/components/ui/llink'
import Typography from '@/components/ui/typography'
import { ChevronLeft, Lock, Mail, User } from 'lucide-react'

export default function SignupPage() {
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

      <form className='space-y-6'>
        <Input icon={<User />} placeholder='Full Name' />
        <Input icon={<Mail />} placeholder='Your Email Address' />
        <Input icon={<Lock />} placeholder='********' type='password' />
        <div className='space-y-2.5'>
          <Button className='w-full'>Register</Button>
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
