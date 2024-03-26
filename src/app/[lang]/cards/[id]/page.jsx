'use client'

import BackLink from '@/components/common/rootLayout/BackLink'
import CardDetails from '@/components/common/rootLayout/CardDetails'
import { Button } from '@/components/ui/button'
import ConfirmationPrompt from '@/components/ui/confirmation-prompt'
import LLink from '@/components/ui/llink'
import Typography from '@/components/ui/typography'
import usePush from '@/hooks/usePush'
import { useDeleteCardMutation, useGetCardQuery } from '@/redux/features/cardsApi'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function CardDetailsPage() {
  const push = usePush()
  const { id } = useParams()
  const { data } = useGetCardQuery(id)
  const [deleteCard, { isSuccess, isError, error }] = useDeleteCardMutation()

  const [showPrompt, setshowPrompt] = useState(false)

  useEffect(() => {
    if (isSuccess) {
      toast.success('Card deleted successfully')
      push('/profile')
    }
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error, push])
  return (
    <>
      <div className='py-10 container max-w-md'>
        <div className='flex items-center gap-6'>
          <BackLink href='/profile' />
          <Typography variant='h3' className='font-medium'>
            Your Card
          </Typography>
        </div>

        <CardDetails data={data?.data} />

        <div className='grid grid-cols-2 gap-5 mt-6'>
          <LLink href={`/cards/edit/${data?.data?._id}`}>
            <Button className='w-full'>Edit</Button>
          </LLink>
          <Button variant='destructive' onClick={() => setshowPrompt(true)}>
            Delete
          </Button>
        </div>
      </div>
      <ConfirmationPrompt open={showPrompt} onOpenChange={setshowPrompt} cb={() => deleteCard(id)} />
    </>
  )
}
