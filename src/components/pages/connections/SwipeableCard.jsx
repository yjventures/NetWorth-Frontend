import cardPlaceholder from '@/assets/images/common/card-placeholder.png'
import { Img } from '@/components/ui/img'
import { CalendarDays, MessagesSquare, Trash2 } from 'lucide-react'
import { useState } from 'react'

const MENU_WIDTH = 156

const SwipeableCard = ({ connection }) => {
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [translateX, setTranslateX] = useState(0)

  // Represents the menu's width in percentage of the container it will cover when open
  const [isDragging, setIsDragging] = useState(false)

  const onTouchStart = e => {
    setStartX(e.touches[0].clientX)
    setIsDragging(true)
  }

  const onTouchMove = e => {
    if (!isDragging) return
    const touchX = e.touches[0].clientX
    const diffX = touchX - startX
    setCurrentX(diffX)
  }

  const onTouchEnd = () => {
    setIsDragging(false)
    // Decide whether to open or close the menu based on the swipe distance
    if (currentX < -50) {
      // Threshold for deciding if the menu should open
      setTranslateX(-MENU_WIDTH) // Open the menu
    } else {
      setTranslateX(0) // Close the menu
    }
    setCurrentX(0) // Reset currentX for the next swipe action
  }

  return (
    <div className='relative h-auto overflow-hidden rounded-lg shadow-md'>
      <div
        className={`absolute top-0 right-0 h-full transition-transform duration-300 ease-out ${
          translateX === 0 ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className='flex h-full'>
          <div className='bg-gray-500'>
            <div className='px-4 text-white bg-gray-400 rounded-e-lg w-full h-full flex items-center justify-center'>
              <CalendarDays className='size-5' />
            </div>
          </div>
          <div className='bg-amber-400'>
            <div className='flex w-full h-full items-center justify-center px-4 rounded-e-lg text-white bg-gray-500'>
              <MessagesSquare className='size-5' />
            </div>
          </div>
          <div className='flex items-center justify-center px-4 rounded-e-lg text-white bg-amber-400'>
            <Trash2 className='size-5' />
          </div>
        </div>
      </div>
      <div
        className='relative h-full w-full p-2 flex gap-3'
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ transform: `translateX(${isDragging ? currentX : translateX}px)` }}
      >
        {connection?.profile_image ? (
          <Img
            src={connection?.profile_image}
            alt={connection?.name}
            className='w-14 aspect-square object-cover rounded-md'
          />
        ) : (
          <Img src={cardPlaceholder} alt={connection?.name} className='w-14 aspect-square object-cover rounded-md' />
        )}
        <div className='space-y-1.5'>
          <p className='text-sm font-medium'>{connection?.name}</p>
          <p className='text-xs font-medium'>
            {connection?.designation} @ {connection?.company_name}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SwipeableCard
