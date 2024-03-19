'use client'

import { SimpleInput } from '@/components/ui/simple-input'
import { SimpleTextarea } from '@/components/ui/simple-textarea'
import { setCardDetails } from '@/redux/features/slices/tempCardSlice'
import { useDispatch } from 'react-redux'

export default function DragInput({ val, multiple = false, textarea, ...rest }) {
  const dispatch = useDispatch()
  const handleDrop = e => {
    e.preventDefault()
    const text = e.dataTransfer.getData('text')
    dispatch(setCardDetails({ [val]: multiple ? [text] : text }))
  }

  const handleDragOver = e => {
    e.preventDefault()
  }
  if (textarea) {
    return <SimpleTextarea {...rest} onDragOver={handleDragOver} onDrop={handleDrop} />
  }
  return <SimpleInput {...rest} onDragOver={handleDragOver} onDrop={handleDrop} />
}
