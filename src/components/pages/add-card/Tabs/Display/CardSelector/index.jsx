'use client'

import SingleAccordion from '@/components/pages/common/SingleAccordion'
import { setCardDetails } from '@/redux/features/slices/tempCardSlice'
import { useDispatch } from 'react-redux'
import DisplayCard from './DisplayCard'

export default function CardSelector({ cardDesign, setcardDesign, color }) {
  const dispatch = useDispatch()
  const setCardDesign = design => {
    setcardDesign(design)
    dispatch(setCardDetails({ design }))
  }
  // const { cardDetails } = useSelector(state => state.tempCard)

  return (
    <SingleAccordion label='Design' value='design'>
      <div className='grid grid-cols-3 gap-5 justify-items-center mt-2'>
        <DisplayCard
          variant='linear'
          selected={cardDesign === 'linear'}
          onClick={() => setCardDesign('linear')}
          color={color}
        />
        <DisplayCard
          variant='curved'
          selected={cardDesign === 'curved'}
          onClick={() => setCardDesign('curved')}
          color={color}
        />
        <DisplayCard
          variant='tilted'
          selected={cardDesign === 'tilted'}
          onClick={() => setCardDesign('tilted')}
          color={color}
        />
      </div>
    </SingleAccordion>
  )
}
