import usePush from '@/hooks/usePush'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { Share } from 'lucide-react'
import AddStatusModal from './AddStatusModal'

const cardVariants = cva('', {
  variants: {
    variant: {
      linear: 'h-28',
      curved: 'rounded-ee-2xl rounded-es-2xl h-28',
      tilted: '-skew-y-[10deg] [&>*]:skew-y-[10deg] h-40 -translate-y-10'
    }
  },
  defaultVariants: {
    variant: 'linear'
  }
})

export default function CardHeader({ data, hideContent, children }) {
  const push = usePush()
  return (
    <section className='relative'>
      <div
        className={cn(
          cardVariants({
            variant: data?.design
          })
        )}
        style={{ backgroundColor: data?.color }}
      >
        <div
          className={cn('flex justify-between items-center p-4 text-white absolute w-full', {
            'top-10': data?.design === 'tilted'
          })}
        >
          <AddStatusModal hideContent={hideContent} cardId={data?._id} status={data?.status} />
          <Share className='size-5 cursor-pointer' onClick={() => push(`/cards/share/${data?._id}`)} />
        </div>
      </div>
      <div className={cn('h-28 bg-white', { 'h-20': data?.design === 'tilted' })} />
      {children}
    </section>
  )
}
