'use client'

import BackLink from '@/components/common/rootLayout/BackLink'
import AdvancedUpdateTab from '@/components/pages/update-card/AdvancedUpdateTab'
import BasicsUpdateTab from '@/components/pages/update-card/BasicsUpdateTab'
import DisplayUpdateTab from '@/components/pages/update-card/DisplayUpdateTab'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Typography from '@/components/ui/typography'
import { useGetCardQuery } from '@/redux/features/cardsApi'
import { setUpdateCardDetails } from '@/redux/features/slices/tempCardSlice'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function EditCardPage() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { data, isSuccess } = useGetCardQuery(id)

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUpdateCardDetails(data?.data))
    }
  }, [isSuccess, data, dispatch])

  return (
    <div className='py-10 container max-w-md'>
      <div className='flex items-center justify-between gap-5'>
        <BackLink href={`/cards/${id}`} />
        <Typography variant='h3' className='font-medium'>
          Edit card
        </Typography>
        <Button type='submit' className='h-12 rounded-xl px-8'>
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
        <AdvancedUpdateTab />
      </Tabs>
    </div>
  )
}
