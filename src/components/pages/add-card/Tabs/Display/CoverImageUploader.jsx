import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import DnDUpload from '@/components/ui/dnd-upload'

export default function CoverImageUploader({ cover_image, setcover_image }) {
  return (
    <Accordion type='single' defaultValue='cover_image' collapsible className='w-full'>
      <AccordionItem value='cover_image'>
        <AccordionTrigger>Cover Photo</AccordionTrigger>
        <AccordionContent>
          <DnDUpload
            setUploadURL={setcover_image}
            accept='image/*'
            label='Click add image to add your profile picture'
            buttonLabel='Select Image'
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
