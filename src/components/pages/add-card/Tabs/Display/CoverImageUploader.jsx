'use client'

import SingleAccordion from '@/components/pages/common/SingleAccordion'
import DnDUpload from '@/components/ui/dnd-upload'
import { Img } from '@/components/ui/img'
import { setCardDetails } from '@/redux/features/slices/tempCardSlice'
import { X } from 'lucide-react'
import { useDispatch } from 'react-redux'

export default function CoverImageUploader({ cover_image, setcover_image }) {
  const dispatch = useDispatch()
  return (
    <SingleAccordion label='Cover Photo' value='cover_image'>
      {cover_image ? (
        <div className='flex items-center gap-5'>
          <Img src={cover_image} alt='Profile Image' className='height-40 aspect-video object-cover' sizes='160px' />
          <X
            className='size-8 cursor-pointer'
            onClick={() => {
              setcover_image('')
              dispatch(setCardDetails({ cover_image: '' }))
            }}
          />
        </div>
      ) : (
        <DnDUpload
          setUploadURL={setcover_image}
          accept='image/*'
          label='Click add image to add your profile picture'
          buttonLabel='Select Image'
          cb={url => dispatch(setCardDetails({ cover_image: url }))}
        />
      )}
    </SingleAccordion>
  )
}
