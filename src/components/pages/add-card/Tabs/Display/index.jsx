'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { TabsContent } from '@/components/ui/tabs'
import { useState } from 'react'
import DisplayCard from './DisplayCard'

export default function DisplayTab() {
  const [cardDesign, setcardDesign] = useState('linear')
  return (
    <TabsContent value='display'>
      <Accordion type='single' defaultValue='design' collapsible className='w-full'>
        <AccordionItem value='design'>
          <AccordionTrigger>Design</AccordionTrigger>
          <AccordionContent>
            <div className='grid grid-cols-3 gap-5 justify-items-center mt-2'>
              <DisplayCard
                variant='linear'
                selected={cardDesign === 'linear'}
                onClick={() => setcardDesign('linear')}
              />
              <DisplayCard
                variant='curved'
                selected={cardDesign === 'curved'}
                onClick={() => setcardDesign('curved')}
              />
              <DisplayCard
                variant='tilted'
                selected={cardDesign === 'tilted'}
                onClick={() => setcardDesign('tilted')}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </TabsContent>
  )
}
