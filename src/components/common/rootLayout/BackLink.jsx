import { Button } from '@/components/ui/button'
import LLink from '@/components/ui/llink'
import { ChevronLeft } from 'lucide-react'

export default function BackLink({ href }) {
  return (
    <LLink href={href}>
      <Button variant='icon' className='shadow-sm px-3 h-10 rounded-lg'>
        <ChevronLeft className='size-6' />
      </Button>
    </LLink>
  )
}
