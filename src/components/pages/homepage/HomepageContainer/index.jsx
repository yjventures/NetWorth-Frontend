'use client'

import Navbar from '@/components/common/rootLayout/Navbar'
import LLink from '@/components/ui/llink'
import { useGetAllCardsQuery } from '@/redux/features/cardsApi'
import { setSelectedCard } from '@/redux/features/slices/cardSlice'
import { Bell, Search } from 'lucide-react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cards from './Cards'

export default function HomepageContainer() {
  const dispatch = useDispatch()

  const { isLoading, isSuccess, data } = useGetAllCardsQuery()
  const cards = data?.data?.cards

  useEffect(() => {
    if (isSuccess) {
      dispatch(setSelectedCard(cards?.[0]?._id))
    }
  }, [cards, isSuccess, dispatch])
  return (
    <div className='py-10'>
      <nav className='flex items-center justify-between'>
        <p className='text-xl font-semibold tracking-[5px] uppercase'>Networth</p>
        <div className='flex gap-4'>
          <Bell />
          <LLink href='/search'>
            <Search />
          </LLink>
        </div>
      </nav>

      <Cards cards={cards} isLoading={isLoading} isSuccess={isSuccess} />

      <Navbar />
    </div>
  )
}
