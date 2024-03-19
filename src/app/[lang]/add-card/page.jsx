'use client'

import AdvancedTab from '@/components/pages/add-card/Tabs/Advanced'
import BasicsTab from '@/components/pages/add-card/Tabs/Basics'
import DisplayTab from '@/components/pages/add-card/Tabs/Display'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Typography from '@/components/ui/typography'
import { useCreateEmptyCardMutation } from '@/redux/features/cardsApi'
import { setCardId } from '@/redux/features/slices/tempCardSlice'
import { useUpdatePersoanlInfoMutation } from '@/redux/features/usersApi'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { getCookie, setCookie } from 'cookies-next'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

export default function AddCardPage() {
  const dispatch = useDispatch()
  const [createEmptyCard, { isSuccess, data, isError, error }] = useCreateEmptyCardMutation()

  const [updateCard, { isSuccess: isCardSuccess, isError: isCardError, error: cardError }] =
    useUpdatePersoanlInfoMutation()

  useEffect(() => {
    createEmptyCard()
  }, [])

  useEffect(() => {
    if (isSuccess) {
      toast.success('Card intialization successfull!')
      setCookie('cardId', data?.data?._id)
      dispatch(setCardId(data?.data?._id))
    }
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error])

  useEffect(() => {
    if (isCardSuccess) {
      toast.success('Card created successfully!')
      // deleteCookie('cardId')
      // dispatch(setCardId(''))
      // dispatch(resetCardTexts())
    }

    if (isCardError) toast.error(rtkErrorMesage(cardError))
  }, [isCardSuccess, cardError, isCardError, dispatch])

  const { cardDetails, cardId } = useSelector(state => state.tempCard)
  return (
    <div className='py-10 container overflow-x-hidden'>
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

      <Tabs defaultValue='display'>
        <div className='flex justify-center pt-5'>
          <TabsList className=''>
            <TabsTrigger value='display'>Display</TabsTrigger>
            <TabsTrigger value='basics'>Basics</TabsTrigger>
            <TabsTrigger value='advanced'>Advanced</TabsTrigger>
          </TabsList>
        </div>
        <DisplayTab />
        <BasicsTab />
        <AdvancedTab />
      </Tabs>
    </div>
  )
}
