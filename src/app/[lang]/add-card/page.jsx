import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Typography from '@/components/ui/typography'
import { X } from 'lucide-react'

export default function AddCardPage() {
  return (
    <div className='py-10 container'>
      <div className='flex items-center justify-between'>
        <div className='border border-black rounded-full p-0.5'>
          <X className='size-4' />
        </div>
        <Typography variant='h4'>Add a card</Typography>
        <button className='text-blue-600 font-semibold text-[17px]'>Save</button>
      </div>

      <Tabs defaultValue='display'>
        <div className='flex justify-center pt-5'>
          <TabsList className=''>
            <TabsTrigger value='display' className=''>
              Display
            </TabsTrigger>
            <TabsTrigger value='basics'>Basics</TabsTrigger>
            <TabsTrigger value='advanced'>Advanced</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value='display'>Display</TabsContent>
        <TabsContent value='basics'>Basics</TabsContent>
        <TabsContent value='advanced'>Advanced</TabsContent>
      </Tabs>
    </div>
  )
}
