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
import { useDispatch, useSelector } from 'react-redux'

export default function CardNameNType({ getter, setter }) {
  const dispatch = useDispatch()
  const {
    [getter]: { card_name, type }
  } = useSelector(state => state.tempCard)
  return (
    <SingleAccordion label='Card' value='card_name_n_type'>
      <SimpleInput
        value={card_name}
        onChange={e => dispatch(setter({ card_name: e.target.value }))}
        placeholder='Card Name'
        className='mb-4'
      />
      <Select value={type} onValueChange={e => dispatch(setter({ type: e }))}>
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
