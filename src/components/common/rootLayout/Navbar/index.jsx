'use client'

import { BookOpen, Home, MessagesSquare, Plus, UserRound } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import NavLink from './NavLink'

export default function Navbar() {
  const { cardId } = useParams()
  const { selectedCard } = useSelector(state => state.card)
  return (
    <nav className='flex fixed bottom-0 left-0 w-full py-3 bg-white border-t items-center justify-between px-3 z-40'>
      <NavLink href='/' icon={<Home />} />
      <NavLink href='/inbox' icon={<MessagesSquare />} />
      <div className='p-3 bg-primary rounded-full text-white'>
        <Plus />
      </div>
      <NavLink href={`/connections/${cardId || selectedCard}`} icon={<BookOpen />} />
      <NavLink href='/profile' icon={<UserRound />} />
    </nav>
  )
}
