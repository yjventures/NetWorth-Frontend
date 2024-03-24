import cardPlaceholder from '@/assets/images/common/card-placeholder.png'
import { Img } from '@/components/ui/img'

export default function CondensedHeaderContent({ data }) {
  return (
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
  )
}
