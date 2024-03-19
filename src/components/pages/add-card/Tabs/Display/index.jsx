import { TabsContent } from '@/components/ui/tabs'
import CardSelector from './CardSelector'
import ColorSelector from './ColorSelector'
import CoverImageUploader from './CoverImageUploader'
import ProfileImageUploader from './ProfileImageUploader'

export default function DisplayTab() {
  return (
    <TabsContent value='display'>
      <CardSelector />
      <ColorSelector />
      <ProfileImageUploader />
      <CoverImageUploader />
    </TabsContent>
  )
}
