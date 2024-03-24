import { Separator } from '@/components/ui/separator'
import { AtSign, Globe, MoveUpRight, Phone } from 'lucide-react'

export default function CardContactLink({ value, type }) {
  const href = type === 'mail' ? `mailto:${value}` : type === 'tel' ? `tel:${value}` : value
  const icon = type === 'mail' ? <AtSign /> : type === 'tel' ? <Phone /> : <Globe />
  return (
    <div className='mb-7'>
      <div className='flex items-center justify-between mb-3'>
        <div className='flex items-center gap-2.5'>
          <span className='text-primary [&>svg]:size-5'>{icon}</span>
          <p className='font-light text-sm'>{value}</p>
        </div>
        <a href={href} target='_blank' rel='noopener noreferrer' className='text-primary'>
          <MoveUpRight />
        </a>
      </div>
      <Separator />
    </div>
  )
}
