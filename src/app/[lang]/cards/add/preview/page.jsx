'use client'

import CardPreview from '@/components/pages/card-preview/CardPreview'
import { Button } from '@/components/ui/button'
import LLink from '@/components/ui/llink'
import Typography from '@/components/ui/typography'
import usePush from '@/hooks/usePush'
import { useUpdateCardMutation } from '@/redux/features/cardsApi'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { getCookie } from 'cookies-next'
import { ArrowUp, X } from 'lucide-react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'

export default function CardPreviewPage() {
  const push = usePush()
  const [updateCard, { isSuccess, isError, error }] = useUpdateCardMutation()

  useEffect(() => {
    if (isSuccess) {
      toast.success('Card created successfully!')
      push('/profile')
    }

    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error, push])

  const { cardDetails } = useSelector(state => state.tempCard)
  return (
    <div className='py-10 container overflow-x-hidden max-w-md'>
      <div className='flex items-center justify-between'>
        <div className='border border-black rounded-full p-0.5'>
          <X className='size-4' strokeWidth={3} />
        </div>
        <Typography variant='h4'>Add a card</Typography>
        <button
          className='text-blue-600 font-semibold text-[17px]'
          onClick={() => updateCard({ id: getCookie('cardId'), payload: cardDetails })}
        >
          Save
        </button>
      </div>

      <CardPreview />

      <LLink href='/cards/add'>
        <Button className='w-auto fixed bottom-5 left-5 right-5'>
          <ArrowUp className='size-5 mr-2' /> Back to edit
        </Button>
      </LLink>
    </div>
  )
}
