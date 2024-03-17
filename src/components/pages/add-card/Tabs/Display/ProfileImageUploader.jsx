import SingleAccordion from '@/components/pages/common/SingleAccordion'
import DnDUpload from '@/components/ui/dnd-upload'

export default function ProfileImageUploader({ profile_image, setprofile_image }) {
  return (
    <SingleAccordion label='Profile Photo' value='profile_image'>
      <DnDUpload
        setUploadURL={setprofile_image}
        accept='image/*'
        label='Click add image to add your profile picture'
        buttonLabel='Select Image'
      />
    </SingleAccordion>
  )
}
