'use client'

import { TabsContent } from '@/components/ui/tabs'
import { CARD_COLORS } from '@/configs/common'
import { useState } from 'react'
import CardSelector from './CardSelector'
import ColorSelector from './ColorSelector'
import CoverImageUploader from './CoverImageUploader'
import ProfileImageUploader from './ProfileImageUploader'

export default function DisplayTab() {
  const [cardDesign, setcardDesign] = useState('linear')
  const [color, setcolor] = useState(CARD_COLORS[0].color)
  const [profile_image, setprofile_image] = useState('')
  const [cover_image, setcover_image] = useState('')

  return (
    <TabsContent value='display'>
      <CardSelector cardDesign={cardDesign} setcardDesign={setcardDesign} color={color} />
      <ColorSelector color={color} setcolor={setcolor} />
      <ProfileImageUploader profile_image={profile_image} setprofile_image={setprofile_image} />
      <CoverImageUploader cover_image={cover_image} setcover_image={setcover_image} />
    </TabsContent>
  )
}
