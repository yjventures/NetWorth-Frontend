'use client'

import { TabsContent } from '@/components/ui/tabs'
import Activities from '../Activities'

export default function ActivitiesTab({ cardId }) {
  return (
    <TabsContent value='portfolio'>
      <Activities cardId={cardId} />
    </TabsContent>
  )
}
