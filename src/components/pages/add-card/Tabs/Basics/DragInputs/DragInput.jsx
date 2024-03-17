'use client'

import { SimpleInput } from '@/components/ui/simple-input'

export default function DragInput({ setval, ...rest }) {
  const handleDrop = e => {
    e.preventDefault()
    const text = e.dataTransfer.getData('text')
    setval(text)
  }

  const handleDragOver = e => {
    e.preventDefault()
  }
  return <SimpleInput {...rest} onDragOver={handleDragOver} onDrop={handleDrop} />
}
