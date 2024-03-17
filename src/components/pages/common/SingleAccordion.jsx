import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

export default function SingleAccordion({ children, value, label, className }) {
  return (
    <Accordion type='single' defaultValue={value} collapsible className={cn('w-full', className)}>
      <AccordionItem value={value}>
        <AccordionTrigger>{label}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
