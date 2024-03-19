'use client'

import { SimpleInput } from '@/components/ui/simple-input'
import { setCardDetails } from '@/redux/features/slices/tempCardSlice'
import { useDispatch } from 'react-redux'

export default function DragInput({ val, ...rest }) {
  const dispatch = useDispatch()
  const handleDrop = e => {
    e.preventDefault()
    const text = e.dataTransfer.getData('text')
    dispatch(setCardDetails({ [val]: text }))
  }

  const handleDragOver = e => {
    e.preventDefault()
  }
  return <SimpleInput {...rest} onDragOver={handleDragOver} onDrop={handleDrop} />
}
