'use client'

import SingleAccordion from '@/components/pages/common/SingleAccordion'
import DnDUpload from '@/components/ui/dnd-upload'
import { Img } from '@/components/ui/img'
import { Label } from '@/components/ui/label'
import { setCardDetails } from '@/redux/features/slices/tempCardSlice'
import { X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import DragInput from './DragInput'

export default function DragInputs() {
  const dispatch = useDispatch()
  const {
    cardDetails: { name, email, bio, designation, company_name, company_logo, phone_number, address }
  } = useSelector(state => state.tempCard)
  return (
    <SingleAccordion label='Personal' value='personal'>
      <div className='space-y-4'>
        <DragInput
          value={bio}
          onChange={e => dispatch(setCardDetails({ bio: e.target.value }))}
          placeholder='Bio'
          rows={5}
          textarea
          val='bio'
        />
        <DragInput
          value={name}
          onChange={e => dispatch(setCardDetails({ name: e.target.value }))}
          placeholder='Name'
          val='name'
        />
        <DragInput
          value={email}
          onChange={e => dispatch(setCardDetails({ email: [e.target.value] }))}
          multiple
          placeholder='Email'
          val='email'
        />
        <DragInput
          value={phone_number}
          onChange={e => dispatch(setCardDetails({ phone_number: [e.target.value] }))}
          placeholder='Phone Number'
          multiple
          val='phone_number'
        />
        <DragInput
          value={designation}
          onChange={e => dispatch(setCardDetails({ designation: e.target.value }))}
          placeholder='Designation'
          val='designation'
        />
        <DragInput
          value={address}
          onChange={e => dispatch(setCardDetails({ address: e.target.value }))}
          placeholder='Address'
          val='address'
        />
        <DragInput
          value={company_name}
          onChange={e => dispatch(setCardDetails({ company_name: e.target.value }))}
          placeholder='Company Name'
          val='company_name'
        />
        <Label>Company Logo</Label>
        {company_logo ? (
          <div className='flex items-center gap-5'>
            <Img src={company_logo} alt='Profile Image' className='size-40 aspect-square object-cover' sizes='160px' />
            <X className='size-8 cursor-pointer' onClick={() => dispatch(setCardDetails({ company_logo: '' }))} />
          </div>
        ) : (
          <DnDUpload
            setUploadURL={() => {}}
            accept='image/*'
            label='Click add image to add your profile picture'
            buttonLabel='Select Image'
            cb={url => dispatch(setCardDetails({ profile_image: url }))}
          />
        )}
      </div>
    </SingleAccordion>
  )
}
