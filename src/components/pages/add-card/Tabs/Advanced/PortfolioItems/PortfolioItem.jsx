import { Button } from '@/components/ui/button'
import ConfirmationPrompt from '@/components/ui/confirmation-prompt'
import { Img } from '@/components/ui/img'
import LLink from '@/components/ui/llink'
import { useDeleteActivityMutation } from '@/redux/features/activitiesApi'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function PortfolioItem({ activity, showDeleteButton = false }) {
  const [showPrompt, setshowPrompt] = useState(false)
  const [deleteActivity, { isSuccess, isError, error }] = useDeleteActivityMutation()

  useEffect(() => {
    if (isSuccess) toast.success('Activity deleted successfully')
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error])

  return (
    <>
      <div key={activity?.id} className='px-3 py-3 rounded-lg flex items-start gap-3 shadow-md w-full bg-gray-800'>
        <Img src={activity?.attachments?.[0]} alt={activity?.name} className='w-20 h-auto rounded-lg' />
        <div>
          <p className='text-sm font-medium pb-3 text-white'>{activity?.name}</p>
          {showDeleteButton ? (
            <div className='grid grid-cols-2 gap-3'>
              <LLink href={`/activities/${activity?._id}`}>
                <Button className='h-10 px-3 w-auto bg-secondary-foreground rounded-md'>View Details</Button>
              </LLink>
              <Button variant='destructive' className='rounded-md h-10 w-auto px-3' onClick={() => setshowPrompt(true)}>
                Delete
              </Button>
            </div>
          ) : (
            <LLink href={`/activities/${activity?._id}`} className='w-full'>
              <Button className='h-10 w-auto bg-secondary-foreground rounded-md px-3'>View Details</Button>
            </LLink>
          )}
        </div>
      </div>
      <ConfirmationPrompt open={showPrompt} onOpenChange={setshowPrompt} cb={() => deleteActivity(activity?._id)} />
    </>
  )
}
