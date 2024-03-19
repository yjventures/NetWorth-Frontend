'use client'

import SingleAccordion from '@/components/pages/common/SingleAccordion'
import { setCardDetails } from '@/redux/features/slices/tempCardSlice'
import { useDispatch, useSelector } from 'react-redux'
import DragInput from './DragInput'

export default function DragInputs() {
  const dispatch = useDispatch()
  const {
    cardDetails: { name, email, bio, designation, company_name, phone_number, address }
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
          value={company_name}
          onChange={e => dispatch(setCardDetails({ company_name: e.target.value }))}
          placeholder='Company Name'
          val='company_name'
        />
        <DragInput
          value={address}
          onChange={e => dispatch(setCardDetails({ address: e.target.value }))}
          placeholder='Address'
          val='address'
        />
      </div>
    </SingleAccordion>
  )
}
