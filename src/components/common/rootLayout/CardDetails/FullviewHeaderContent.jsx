import cardPlaceholder from '@/assets/images/common/card-placeholder.png'
import { Img } from '@/components/ui/img'
import Typography from '@/components/ui/typography'

export default function FullviewHeaderContent({ data }) {
  return (
    <div className='flex items-center gap-5 px-5 absolute top-16 left-0 w-full'>
      {data?.profile_image ? (
        <Img src={data?.profile_image} alt={data?.name} className='w-32 aspect-square object-cover rounded-full' />
      ) : (
        <Img src={cardPlaceholder} alt={data?.name} className='w-32 aspect-square object-cover rounded-full' />
      )}
      <div className='mb-4'>
        <Typography variant='h3' className='text-white'>
          {data?.name}
        </Typography>
        <p className='font-light text-sm text-primary'>&quot;{data?.designation}&quot;</p>
        <p className='text-sm font-medium text-primary'>{data?.company_name}</p>
      </div>
    </div>
  )
}
