'use client'

import { useSelector } from 'react-redux'
import DraggableText from './DraggableText'

export default function DrgaggableTextContainer() {
  const { cardTexts } = useSelector(state => state.tempCard)
  return (
    <div className='flex flex-wrap gap-2 p-3 bg-secondary rounded-lg border shadow-sm mt-5 max-h-56 overflow-y-auto overflow-x-hidden'>
      {cardTexts.map(text => (
        <DraggableText key={text} text={text} />
      ))}
    </div>
  )
}
