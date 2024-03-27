'use client'

import cardPlaceholder from '@/assets/images/common/card-placeholder.png'
import coverPlaceholder from '@/assets/images/common/cover-placeholder.png'
import { Img } from '@/components/ui/img'
import { useSendRequestMutation } from '@/redux/features/contactsApi'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function SearchCard({ card, cardId }) {
  const [sendRequest, { isSuccess, isError, error }] = useSendRequestMutation()

  const sendRequestFn = () => {
    sendRequest({ sender_id: cardId, recipient_id: card?._id })
  }

  useEffect(() => {
    if (isSuccess) toast.success('Sent connection requst successfully!')
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error])

  return (
    <div className='rounded-lg overflow-hidden relative border shadow-md'>
      {card?.cover_image ? (
        <Img src={card.cover_image} className='w-full h-16 object-cover' sizes='200px' />
      ) : (
        <Img src={coverPlaceholder} className='w-full h-16 object-cover' />
      )}

      <div className='absolute top-8 left-1/2 -translate-x-1/2 size-20 rounded-full overflow-hidden'>
        {card?.profile_image ? (
          <Img src={card.profile_image} className='w-full h-full object-cover' sizes='200px' />
        ) : (
          <Img src={cardPlaceholder} className='w-full h-full object-cover' />
        )}
      </div>

      <div className='pt-16 px-3 pb-3'>
        <p className='font-medium text-sm'>{card?.name}</p>
        <p className='text-sm font-light text-muted-foreground pt-1'>
          {card?.designation} - {card?.company_name}
        </p>

        <div className='flex gap-3 items-center mt-3 mb-4'>
          {card?.company_logo ? (
            <Img src={card?.company_logo} className='size-6 rounded-full object-cover' sizes='30px' />
          ) : null}
          <p className='text-xs font-light text-muted-foreground'>{card?.address}</p>
        </div>

        <button
          className='w-full rounded-full bg-transparent text-primary border-primary border py-1 text-sm font-medium'
          onClick={sendRequestFn}
        >
          Connect
        </button>
      </div>
    </div>
  )
}
