import { lottieDefaultOptions } from '@/constants/lottieDefaultOptions'
import { cn } from '@/lib/utils'
import Lottie from 'react-lottie'

export default function Overlay({ isOpen, animationData }) {
  return (
    <div
      className={cn(
        'w-full min-h-screen flex items-center justify-center fixed left-0 top-0 backdrop-blur-md z-[100]',
        {
          hidden: !isOpen
        }
      )}
    >
      <div className='max-w-md'>
        <Lottie options={lottieDefaultOptions(animationData)} />
      </div>
    </div>
  )
}
