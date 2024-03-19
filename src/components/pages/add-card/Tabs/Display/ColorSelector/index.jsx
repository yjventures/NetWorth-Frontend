'use client'

import colorWheel from '@/assets/images/add-card/color-wheel.png'
import SingleAccordion from '@/components/pages/common/SingleAccordion'
import { Img } from '@/components/ui/img'
import { CARD_COLORS } from '@/configs/common'
import { setCardDetails } from '@/redux/features/slices/tempCardSlice'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { ColorButton } from './ColorButton'

export default function ColorSelector({ color: selectedColor, setcolor }) {
  const dispatch = useDispatch()
  const colorWheelRef = useRef(null)
  return (
    <SingleAccordion label='Color' value='color'>
      <div className='flex items-center justify-between pr-1'>
        <input
          type='color'
          value={selectedColor}
          onChange={e => {
            setcolor(e.target.value)
            dispatch(setCardDetails({ color: e.target.value }))
          }}
          ref={colorWheelRef}
          className='hidden'
        />
        <Img src={colorWheel} alt='color wheel' className='size-9' onClick={() => colorWheelRef.current.click()} />

        {CARD_COLORS.map(color => (
          <ColorButton
            key={color.id}
            color={color.color}
            outline={color.outline}
            selected={color.color === selectedColor}
            onClick={() => {
              setcolor(color.color)
              dispatch(setCardDetails({ color: color.color }))
            }}
          />
        ))}
      </div>
    </SingleAccordion>
  )
}
