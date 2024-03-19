'use client'

import { TabsContent } from '@/components/ui/tabs'
import { useState } from 'react'
import CardSelector from './CardSelector'
import ColorSelector from './ColorSelector'
import CoverImageUploader from './CoverImageUploader'
import ProfileImageUploader from './ProfileImageUploader'

export default function DisplayTab() {
  const [cover_image, setcover_image] = useState('')

  return (
    <TabsContent value='display'>
      <CardSelector />
      <ColorSelector />
      <ProfileImageUploader />
      <CoverImageUploader cover_image={cover_image} setcover_image={setcover_image} />
    </TabsContent>
  )
}
