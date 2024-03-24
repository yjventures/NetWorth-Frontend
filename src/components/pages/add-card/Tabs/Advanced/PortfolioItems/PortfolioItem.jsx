import { Button } from '@/components/ui/button'
import { Img } from '@/components/ui/img'
import LLink from '@/components/ui/llink'

export default function PortfolioItem({ activity }) {
  return (
    <div key={activity?.id} className='p-5 rounded-lg shadow-md w-full space-y-3 bg-gray-800'>
      <Img
        src={activity?.attachments?.[0]}
        alt={activity?.name}
        className='max-w-sm mx-auto aspect-video object-cover'
      />
      <p className='text-xl pb-5 text-white'>{activity?.name}</p>
      <LLink href={`/activities/${activity?._id}`} className='w-full'>
        <Button className='w-full  bg-secondary-foreground rounded-md'>View Details</Button>
      </LLink>
    </div>
  )
}
