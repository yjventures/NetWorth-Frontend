import SingleAccordion from '@/components/pages/common/SingleAccordion'
import DnDUpload from '@/components/ui/dnd-upload'

export default function CoverImageUploader({ cover_image, setcover_image }) {
  return (
    <SingleAccordion label='Cover Photo' value='cover_image'>
      <DnDUpload
        setUploadURL={setcover_image}
        accept='image/*'
        label='Click add image to add your profile picture'
        buttonLabel='Select Image'
      />
    </SingleAccordion>
  )
}
