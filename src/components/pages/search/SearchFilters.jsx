'use client'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { SimpleInput } from '@/components/ui/simple-input'
import { SlidersVertical } from 'lucide-react'

export default function SearchFilters({ params, setparams }) {
  return (
    <Popover>
      <PopoverTrigger>
        <SlidersVertical />
      </PopoverTrigger>
      <PopoverContent>
        <div className='space-y-3'>
          <SimpleInput
            value={params.country}
            onChange={e => setparams({ ...params, country: e.target.value })}
            placeholder='Country'
          />

          <SimpleInput
            value={params.city}
            onChange={e => setparams({ ...params, city: e.target.value })}
            placeholder='City'
          />

          <SimpleInput
            value={params.designation}
            onChange={e => setparams({ ...params, designation: e.target.value })}
            placeholder='Designation'
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}
