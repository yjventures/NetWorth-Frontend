'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Typography from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import CardHeader from './CardHeader'
import CondensedHeaderContent from './CondensedHeaderContent'
import ActivitiesTab from './Tabs/ActivitiesTab'

export default function CardDetails({ data, className }) {
  return (
    <section className={cn('rounded-2xl overflow-hidden mt-5 bg-white shadow-md', className)}>
      <CardHeader data={data}>
        <CondensedHeaderContent data={data} />
      </CardHeader>

      <div className='px-5'>
        <Typography variant='h5'>{data?.name}</Typography>
        <p className='text-sm font-medium text-muted-foreground'>
          {data?.company_name} | {data?.designation}
        </p>
        <p className='text-sm font-medium italic pt-3 text-muted-foreground'>{data?.bio}</p>
      </div>

      <Tabs defaultValue='links' className='pb-10'>
        <div className='flex justify-center pt-6'>
          <TabsList>
            <TabsTrigger value='links'>Links</TabsTrigger>
            <TabsTrigger value='portfolio'>Portfolio</TabsTrigger>
            <TabsTrigger value='networth'>Networth</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value='links'></TabsContent>
        <ActivitiesTab cardId={data?._id} />
        {/* <DisplayUpdateTab />
        <BasicsUpdateTab />
        <AdvancedUpdateTab cardId={data?.data?._id} /> */}
      </Tabs>
    </section>
  )
}
