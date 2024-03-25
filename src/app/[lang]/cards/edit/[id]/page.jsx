'use client'

import BackLink from '@/components/common/rootLayout/BackLink'
import AdvancedUpdateTab from '@/components/pages/update-card/AdvancedUpdateTab'
import BasicsUpdateTab from '@/components/pages/update-card/BasicsUpdateTab'
import DisplayUpdateTab from '@/components/pages/update-card/DisplayUpdateTab'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Typography from '@/components/ui/typography'
import usePush from '@/hooks/usePush'
import { useGetCardQuery, useUpdateCardMutation } from '@/redux/features/cardsApi'
import { setUpdateCardDetails } from '@/redux/features/slices/tempCardSlice'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

export default function EditCardPage() {
  const push = usePush()
  const dispatch = useDispatch()
  const { id } = useParams()
  const { data, isSuccess } = useGetCardQuery(id)

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUpdateCardDetails(data?.data))
    }
  }, [isSuccess, data, dispatch])

  const { updateCardDetails } = useSelector(state => state.tempCard)

  const [updateCard, { isSuccess: isUpdateSuccess, isError, error }] = useUpdateCardMutation()

  useEffect(() => {
    if (isUpdateSuccess) {
      toast.success('Card updated successfully!')
      push(`/cards/${id}`)
    }

    if (isError) toast.error(rtkErrorMesage(error))
  }, [isUpdateSuccess, isError, error, id, push])

  return (
    <div className='py-10 container max-w-md'>
      <div className='flex items-center justify-between gap-5'>
        <BackLink href={`/cards/${id}`} />
        <Typography variant='h3' className='font-medium'>
          Edit card
        </Typography>
        <Button className='h-12 rounded-xl px-8' onClick={() => updateCard({ id, payload: updateCardDetails })}>
          Save
        </Button>
      </div>

      <Tabs defaultValue='display-update'>
        <div className='flex justify-center pt-5'>
          <TabsList>
            <TabsTrigger value='display-update'>Display</TabsTrigger>
            <TabsTrigger value='basics-update'>Basics</TabsTrigger>
            <TabsTrigger value='advanced-update'>Advanced</TabsTrigger>
          </TabsList>
        </div>
        <DisplayUpdateTab />
        <BasicsUpdateTab />
        <AdvancedUpdateTab cardId={data?.data?._id} />
      </Tabs>
    </div>
  )
}
