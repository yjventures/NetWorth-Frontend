'use client'

import BasicsTab from '@/components/pages/add-card/Tabs/Basics'
import DisplayTab from '@/components/pages/add-card/Tabs/Display'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Typography from '@/components/ui/typography'
import { X } from 'lucide-react'
import { useSelector } from 'react-redux'

export default function AddCardPage() {
  const { cardDetails } = useSelector(state => state.tempCard)
  return (
    <div className='py-10 container overflow-x-hidden'>
      <div className='flex items-center justify-between'>
        <div className='border border-black rounded-full p-0.5'>
          <X className='size-4' strokeWidth={3} />
        </div>
        <Typography variant='h4'>Add a card</Typography>
        <button className='text-blue-600 font-semibold text-[17px]' onClick={() => console.log(cardDetails)}>
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
        <TabsContent value='advanced'>Advanced</TabsContent>
      </Tabs>
    </div>
  )
}
