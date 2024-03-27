import cardPlaceholder from '@/assets/images/common/card-placeholder.png'
import { Img } from '@/components/ui/img'
import { cn } from '@/lib/utils'
import { setSelectedCard } from '@/redux/features/slices/cardSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Card({ card }) {
  const dispatch = useDispatch()
  const { selectedCard } = useSelector(state => state.card)
  return (
    <div
      className={cn('w-24 min-w-24 shadow-md border rounded-lg pt-2 px-2 pb-1 m-1', {
        'ring-primary ring-2': selectedCard === card?._id
      })}
      onClick={() => dispatch(setSelectedCard(card?._id))}
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
