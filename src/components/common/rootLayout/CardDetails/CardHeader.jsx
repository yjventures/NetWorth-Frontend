import cardPlaceholder from '@/assets/images/common/card-placeholder.png'
import { Img } from '@/components/ui/img'
import { PlusCircle, Share } from 'lucide-react'

export default function CardHeader({ data }) {
  return (
    <section className='relative'>
      <div
        className='w-full h-28 flex justify-between items-start p-4 text-white'
        style={{ backgroundColor: data?.color }}
      >
        <div className='flex items-center gap-2 font-medium text-sm cursor-pointer'>
          <PlusCircle className='size-5' />
          <p>Say Something</p>
        </div>
        <Share className='size-5 cursor-pointer' />
      </div>
      <div className='h-28 bg-white' />
      <div className='flex items-center justify-between px-5 absolute top-16 left-0 w-full'>
        {data?.profile_image ? (
          <Img src={data?.profile_image} alt={data?.name} className='w-32 aspect-square object-cover rounded-full' />
        ) : (
          <Img src={cardPlaceholder} alt={data?.name} className='w-32 aspect-square object-cover rounded-full' />
        )}
        {data?.company_logo ? (
          <Img src={data?.company_logo} alt={data?.name} className='w-12 aspect-square object-cover rounded-full' />
        ) : null}
      </div>
    </section>
  )
}
