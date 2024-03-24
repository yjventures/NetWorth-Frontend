import cardPlaceholder from '@/assets/images/common/card-placeholder.png'
import { Img } from '@/components/ui/img'
import { cn } from '@/lib/utils'
import { cardVariants } from '../../add-card/Tabs/Display/CardSelector/DisplayCard'

export default function ProfileCard({ card }) {
  return (
    <div className='rounded-2xl overflow-hidden relative w-44'>
      <div
        className={cn(cardVariants({ variant: card?.design, className: 'w-full h-24' }))}
        style={{ backgroundColor: card?.color }}
      />
      <div className='w-full h-24 bg-white' />

      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full p-5'>
        {card?.profile_image ? (
          <Img src={card?.profile_image} alt={card?.name} className='w-full rounded-xl' />
        ) : (
          <Img src={cardPlaceholder} alt={card?.name} className='w-full rounded-xl' />
        )}
        <p className='font-medium text-sm p-2'>{card?.card_name}</p>
      </div>
    </div>
  )
}
