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
import { useState } from 'react'

export default function CardNameNType() {
  const [name, setname] = useState('')
  const [type, settype] = useState('Public')

  return (
    <SingleAccordion label='Card' value='card_name_n_type'>
      <SimpleInput value={name} onChange={e => setname(e.target.value)} placeholder='Card Name' className='mb-4' />
      <Select value={type} onValueChange={settype}>
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
