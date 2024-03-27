import { Button } from '@/components/ui/button'
import LLink from '@/components/ui/llink'
import { cn } from '@/lib/utils'
import { ChevronLeft } from 'lucide-react'

export default function BackLink({ href, className }) {
  return (
    <LLink href={href}>
      <Button variant='icon' className={cn('shadow-sm px-3 h-12 rounded-lg bg-white', className)}>
        <ChevronLeft className='size-6' />
      </Button>
    </LLink>
  )
}
