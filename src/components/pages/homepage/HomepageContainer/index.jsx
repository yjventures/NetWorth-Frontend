'use client'

import Navbar from '@/components/common/rootLayout/Navbar'
import { Bell, Search } from 'lucide-react'
import Cards from './Cards'

export default function HomepageContainer() {
  return (
    <div className='py-10'>
      <nav className='flex items-center justify-between'>
        <p className='text-xl font-semibold tracking-[5px] uppercase'>Networth</p>
        <div className='flex gap-4'>
          <Bell />
          <Search />
        </div>
      </nav>

      <Cards />

      <Navbar />
    </div>
  )
}