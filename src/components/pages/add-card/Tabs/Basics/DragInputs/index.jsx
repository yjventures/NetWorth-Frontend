'use client'

import SingleAccordion from '@/components/pages/common/SingleAccordion'
import { setCardDetails } from '@/redux/features/slices/tempCardSlice'
import { useDispatch, useSelector } from 'react-redux'
import DragInput from './DragInput'

export default function DragInputs() {
  const dispatch = useDispatch()
  const {
    cardDetails: { name, email }
  } = useSelector(state => state.tempCard)
  return (
    <SingleAccordion label='Personal' value='personal'>
      <div className='space-y-4'>
        <DragInput
          value={name}
          onChange={e => dispatch(setCardDetails({ name: e.target.value }))}
          placeholder='Name'
          val='name'
        />
        <DragInput
          value={email}
          onChange={e => dispatch(setCardDetails({ email: e.target.value }))}
          placeholder='Email'
          val='email'
        />
      </div>
    </SingleAccordion>
  )
}
