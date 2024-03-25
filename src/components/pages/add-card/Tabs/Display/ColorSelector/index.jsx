'use client'

import colorWheel from '@/assets/images/add-card/color-wheel.png'
import SingleAccordion from '@/components/pages/common/SingleAccordion'
import { Img } from '@/components/ui/img'
import { CARD_COLORS } from '@/configs/common'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ColorButton } from './ColorButton'

export default function ColorSelector({ getter, setter }) {
  const {
    [getter]: { color }
  } = useSelector(state => state.tempCard)
  const dispatch = useDispatch()
  const colorWheelRef = useRef(null)
  return (
    <SingleAccordion label='Color' value='color'>
      <div className='flex items-center justify-between pr-1'>
        <input
          type='color'
          value={color}
          onChange={e => {
            dispatch(setter({ color: e.target.value }))
          }}
          ref={colorWheelRef}
          className='hidden'
        />
        <Img src={colorWheel} alt='color wheel' className='size-9' onClick={() => colorWheelRef.current.click()} />

        {CARD_COLORS.map(col => (
          <ColorButton
            key={col.id}
            color={col.color}
            outline={col.outline}
            selected={col.color === color}
            onClick={() => {
              dispatch(setter({ color: col.color }))
            }}
          />
        ))}
      </div>
    </SingleAccordion>
  )
}
