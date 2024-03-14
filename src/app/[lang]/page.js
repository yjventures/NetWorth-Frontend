import { Input } from '@/components/ui/input'
import { User } from 'lucide-react'

export default function Home() {
  return (
    <main className='container pt-20 space-y-2'>
      <Input placeholder='Your Name' className='max-w-sm' icon={<User />} />
      <Input placeholder='Your Name' className='max-w-sm' />
    </main>
  )
}
