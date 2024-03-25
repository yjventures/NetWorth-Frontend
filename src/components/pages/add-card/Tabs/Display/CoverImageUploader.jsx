'use client'

import SingleAccordion from '@/components/pages/common/SingleAccordion'
import DnDUpload from '@/components/ui/dnd-upload'
import { Img } from '@/components/ui/img'
import { X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'

export default function CoverImageUploader({ getter, setter }) {
  const {
    [getter]: { cover_image }
  } = useSelector(state => state.tempCard)
  const dispatch = useDispatch()
  return (
    <SingleAccordion label='Cover Photo' value='cover_image'>
      {cover_image ? (
        <div className='flex items-center gap-5'>
          <Img
            src={cover_image}
            alt='Profile Image'
            className='height-40 max-w-[80%] aspect-video object-cover'
            sizes='500px'
          />
          <X className='size-8 cursor-pointer' onClick={() => dispatch(setter({ cover_image: '' }))} />
        </div>
      ) : (
        <DnDUpload
          setUploadURL={() => {}}
          accept='image/*'
          label='Click add image to add your profile picture'
          buttonLabel='Select Image'
          cb={url => dispatch(setter({ cover_image: url }))}
        />
      )}
    </SingleAccordion>
  )
}
