'use client'

import colorWheel from '@/assets/images/add-card/color-wheel.png'
import SingleAccordion from '@/components/pages/common/SingleAccordion'
import { Img } from '@/components/ui/img'
import { CARD_COLORS } from '@/configs/common'
import { useRef } from 'react'
import { ColorButton } from './ColorButton'

export default function ColorSelector({ color: selectedColor, setcolor }) {
  const colorWheelRef = useRef(null)
  return (
    <SingleAccordion label='Color' value='color'>
      <div className='flex items-center justify-between pr-1'>
        <input
          type='color'
          value={selectedColor}
          onChange={e => setcolor(e.target.value)}
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
            onClick={() => setcolor(color.color)}
          />
        ))}
      </div>
    </SingleAccordion>
  )
}
