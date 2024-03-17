import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const cardVariants = cva('h-1/2', {
  variants: {
    variant: {
      linear: '',
      curved: 'rounded-ee-2xl rounded-es-2xl',
      tilted: '-rotate-[10deg] scale-150 -translate-y-4'
    }
  },
  defaultVariants: {
    variant: 'linear'
  }
})

export default function DisplayCard({ selected, variant, className, color, ...rest }) {
  return (
    <div>
      <div
        className={cn('relative size-24 rounded-md overflow-hidden bg-gray-300 cursor-pointer', {
          'outline outline-green-400': selected
        })}
        {...rest}
      >
        <div className={cn(cardVariants({ variant, className }))} style={{ backgroundColor: color }} />
        <div className='size-8 rounded-full absolute top-1/2 left-3 -translate-y-1/2 bg-gray-400' />
      </div>
      <div className='text-center text-sm font-medium mt-2'>{variant.charAt(0).toUpperCase() + variant.slice(1)}</div>
    </div>
  )
}
