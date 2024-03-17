import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import DisplayCard from './DisplayCard'

export default function CardSelector({ cardDesign, setcardDesign, color }) {
  return (
    <Accordion type='single' defaultValue='design' collapsible className='w-full'>
      <AccordionItem value='design'>
        <AccordionTrigger>Design</AccordionTrigger>
        <AccordionContent>
          <div className='grid grid-cols-3 gap-5 justify-items-center mt-2'>
            <DisplayCard
              variant='linear'
              selected={cardDesign === 'linear'}
              onClick={() => setcardDesign('linear')}
              color={color}
            />
            <DisplayCard
              variant='curved'
              selected={cardDesign === 'curved'}
              onClick={() => setcardDesign('curved')}
              color={color}
            />
            <DisplayCard
              variant='tilted'
              selected={cardDesign === 'tilted'}
              onClick={() => setcardDesign('tilted')}
              color={color}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
