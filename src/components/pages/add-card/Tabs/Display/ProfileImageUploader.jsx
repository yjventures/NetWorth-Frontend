import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import DnDUpload from '@/components/ui/dnd-upload'

export default function ProfileImageUploader({ profile_image, setprofile_image }) {
  return (
    <Accordion type='single' defaultValue='profile_image' collapsible className='w-full'>
      <AccordionItem value='profile_image'>
        <AccordionTrigger>Profile Photo</AccordionTrigger>
        <AccordionContent>
          <DnDUpload
            setUploadURL={setprofile_image}
            accept='image/*'
            label='Click add image to add your profile picture'
            buttonLabel='Select Image'
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
