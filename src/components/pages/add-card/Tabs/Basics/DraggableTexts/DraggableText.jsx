'use client'

export default function DraggableText({ text }) {
  const handleDragStart = (e, text) => {
    e.dataTransfer.setData('text', text)
    e.target.classList.add('cursor-grabbing')
  }

  const handleDrag = e => {
    e.target.classList.add('cursor-grabbing')
    e.target.style.position = 'relative'
    e.target.style.opacity = '0'
    e.target.style.left = `${e.clientX}px`
    e.target.style.top = `${e.clientY}px`
  }

  const handleDragEnd = e => {
    e.target.classList.remove('cursor-grabbing')
    e.target.style.opacity = '1'
    e.target.style.left = '0'
    e.target.style.top = '0'
  }
  return (
    <div
      className='text-xs text-white bg-secondary-foreground px-2 py-1 rounded-md cursor-pointer'
      draggable
      onDragStart={e => handleDragStart(e, text)}
      onDragEnd={handleDragEnd}
      onDrag={handleDrag}
    >
      {text}
    </div>
  )
}
