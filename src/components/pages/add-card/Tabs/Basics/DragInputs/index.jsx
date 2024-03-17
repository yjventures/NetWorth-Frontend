'use client'

import SingleAccordion from '@/components/pages/common/SingleAccordion'
import { useState } from 'react'
import DragInput from './DragInput'

export default function DragInputs() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  return (
    <SingleAccordion label='Personal' value='personal'>
      <div className='space-y-4'>
        <DragInput value={name} onChange={e => setname(e.target.value)} placeholder='Name' setval={setname} />
        <DragInput value={email} onChange={e => setemail(e.target.value)} placeholder='Email' setval={setemail} />
      </div>
    </SingleAccordion>
  )
}
