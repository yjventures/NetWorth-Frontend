'use client'

import SingleAccordion from '@/components/pages/common/SingleAccordion'
import { setCardDetails } from '@/redux/features/slices/tempCardSlice'
import { useDispatch, useSelector } from 'react-redux'
import DisplayCard from './DisplayCard'

export default function CardSelector() {
  const {
    cardDetails: { design, color }
  } = useSelector(state => state.tempCard)
  const dispatch = useDispatch()
  return (
    <SingleAccordion label='Design' value='design'>
      <div className='grid grid-cols-3 gap-5 justify-items-center mt-2'>
        <DisplayCard
          variant='linear'
          selected={design === 'linear'}
          onClick={() => dispatch(setCardDetails({ design: 'linear' }))}
          color={color}
        />
        <DisplayCard
          variant='curved'
          selected={design === 'curved'}
          onClick={() => dispatch(setCardDetails({ design: 'curved' }))}
          color={color}
        />
        <DisplayCard
          variant='tilted'
          selected={design === 'tilted'}
          onClick={() => dispatch(setCardDetails({ design: 'tilted' }))}
          color={color}
        />
      </div>
    </SingleAccordion>
  )
}
