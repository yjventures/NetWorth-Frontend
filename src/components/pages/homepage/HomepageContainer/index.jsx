'use client'

import { Bell, Search } from 'lucide-react'
import { useState } from 'react'
import Cards from './Cards'

export default function HomepageContainer() {
  const [selectedCard, setselectedCard] = useState('')

  return (
    <div className='py-10'>
      <nav className='flex items-center justify-between'>
        <p className='text-xl font-semibold tracking-[5px] uppercase'>Networth</p>
        <div className='flex gap-3'>
          <Bell />
          <Search />
        </div>
      </nav>

      <Cards selectedCard={selectedCard} setselectedCard={setselectedCard} />
    </div>
  )
}
