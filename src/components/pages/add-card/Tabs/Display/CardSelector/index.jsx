'use client'

import SingleAccordion from '@/components/pages/common/SingleAccordion'
import { useDispatch, useSelector } from 'react-redux'
import DisplayCard from './DisplayCard'

export default function CardSelector({ getter, setter }) {
  const {
    [getter]: { design, color }
  } = useSelector(state => state.tempCard)
  const dispatch = useDispatch()
  return (
    <SingleAccordion label='Design' value='design'>
      <div className='grid grid-cols-3 gap-5 justify-items-center mt-2'>
        <DisplayCard
          variant='linear'
          selected={design === 'linear'}
          onClick={() => dispatch(setter({ design: 'linear' }))}
          color={color}
        />
        <DisplayCard
          variant='curved'
          selected={design === 'curved'}
          onClick={() => dispatch(setter({ design: 'curved' }))}
          color={color}
        />
        <DisplayCard
          variant='tilted'
          selected={design === 'tilted'}
          onClick={() => dispatch(setter({ design: 'tilted' }))}
          color={color}
        />
      </div>
    </SingleAccordion>
  )
}
