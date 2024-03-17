'use client'

import { TabsContent } from '@/components/ui/tabs'
import { useState } from 'react'
import CardSelector from './CardSelector'
import ColorSelector from './ColorSelector'

export const COLORS = [
  { id: 1, color: '#0284c7', outline: '#1e40af' }, // blue
  { id: 2, color: '#dc2626', outline: '#991b1b' }, // red
  { id: 3, color: '#d97706', outline: '#92400e' }, // amber
  { id: 4, color: '#9333ea', outline: '#6b21a8' }, // purple
  { id: 5, color: '#0d9488', outline: '#065f46' }, // emerald
  { id: 6, color: '#65a30d', outline: '#3f6212' } // lime
]

export default function DisplayTab() {
  const [cardDesign, setcardDesign] = useState('linear')
  const [color, setcolor] = useState(COLORS[0].color)
  return (
    <TabsContent value='display'>
      <CardSelector cardDesign={cardDesign} setcardDesign={setcardDesign} color={color} />
      <ColorSelector color={color} setcolor={setcolor} />
    </TabsContent>
  )
}
