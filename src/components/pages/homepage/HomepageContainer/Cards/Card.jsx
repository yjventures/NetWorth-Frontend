import cardPlaceholder from '@/assets/images/common/card-placeholder.png'
import { Img } from '@/components/ui/img'
import { cn } from '@/lib/utils'

export default function Card({ card, selectedCard, setselectedCard }) {
  return (
    <div
      className={cn('w-24 min-w-24 shadow-lg border rounded-lg pt-2 px-2 pb-1 m-1', {
        'ring-primary ring-2': selectedCard === card?._id
      })}
      onClick={() => setselectedCard(card?._id)}
    >
      {card?.profile_image ? (
        <Img
          src={card?.profile_image}
          sizes='100px'
          alt={card?.card_name}
          className='rounded-md aspect-square object-cover'
        />
      ) : (
        <Img
          src={cardPlaceholder}
          sizes='100px'
          alt={card?.card_name}
          className='rounded-md aspect-square object-cover'
        />
      )}
      <p className='text-[10px] pt-1 font-medium'>{card?.card_name}</p>
    </div>
  )
}
