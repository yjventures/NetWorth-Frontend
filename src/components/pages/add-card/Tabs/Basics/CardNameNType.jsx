'use client'

import SingleAccordion from '@/components/pages/common/SingleAccordion'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { SimpleInput } from '@/components/ui/simple-input'
import { setCardDetails } from '@/redux/features/slices/tempCardSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function CardNameNType() {
  const dispatch = useDispatch()
  const {
    cardDetails: { card_name, type }
  } = useSelector(state => state.tempCard)
  return (
    <SingleAccordion label='Card' value='card_name_n_type'>
      <SimpleInput
        value={card_name}
        onChange={e => dispatch(setCardDetails({ card_name: e.target.value }))}
        placeholder='Card Name'
        className='mb-4'
      />
      <Select value={type} onValueChange={e => dispatch(setCardDetails({ type: e }))}>
        <SelectTrigger className='h-12 bg-gray-50'>
          <SelectValue placeholder='Select card type' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Card Type</SelectLabel>
            <SelectItem value='Public'>Public</SelectItem>
            <SelectItem value='Private'>Private</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </SingleAccordion>
  )
}
