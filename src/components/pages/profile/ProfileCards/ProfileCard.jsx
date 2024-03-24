import cardPlaceholder from '@/assets/images/common/card-placeholder.png'
import { Img } from '@/components/ui/img'
import LLink from '@/components/ui/llink'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

export const cardVariants = cva('', {
  variants: {
    variant: {
      linear: '',
      curved: 'rounded-ee-2xl rounded-es-2xl',
      tilted: '-rotate-[10deg] scale-150 -translate-y-8'
    }
  },
  defaultVariants: {
    variant: 'linear'
  }
})

export default function ProfileCard({ card }) {
  return (
    <LLink href={`/cards/${card?._id}`}>
      <div className='rounded-2xl overflow-hidden relative w-40'>
        <div
          className={cn(cardVariants({ variant: card?.design, className: 'w-full h-24' }))}
          style={{ backgroundColor: card?.color }}
        />
        <div className='w-full h-20 bg-white' />

        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full p-4'>
          {card?.profile_image ? (
            <Img src={card?.profile_image} alt={card?.name} className='w-full aspect-square object-cover rounded-xl' />
          ) : (
            <Img src={cardPlaceholder} alt={card?.name} className='w-full aspect-square object-cover rounded-xl' />
          )}
          <p className='font-medium text-sm p-1.5'>{card?.card_name}</p>
        </div>
      </div>
    </LLink>
  )
}
