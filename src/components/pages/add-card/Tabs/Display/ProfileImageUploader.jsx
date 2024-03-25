'use client'

import SingleAccordion from '@/components/pages/common/SingleAccordion'
import DnDUpload from '@/components/ui/dnd-upload'
import { Img } from '@/components/ui/img'
import { X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'

export default function ProfileImageUploader({ getter, setter }) {
  const {
    [getter]: { profile_image }
  } = useSelector(state => state.tempCard)
  const dispatch = useDispatch()

  return (
    <SingleAccordion label='Profile Photo' value='profile_image'>
      {profile_image ? (
        <div className='flex items-center gap-5'>
          <Img src={profile_image} alt='Profile Image' className='size-40 aspect-square object-cover' sizes='160px' />
          <X className='size-8 cursor-pointer' onClick={() => dispatch(setter({ profile_image: '' }))} />
        </div>
      ) : (
        <DnDUpload
          setUploadURL={() => {}}
          accept='image/*'
          label='Click add image to add your profile picture'
          buttonLabel='Select Image'
          cb={url => dispatch(setter({ profile_image: url }))}
        />
      )}
    </SingleAccordion>
  )
}
