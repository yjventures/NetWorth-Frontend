import { TabsContent } from '@/components/ui/tabs'
import { setCardDetails } from '@/redux/features/slices/tempCardSlice'
import CardSelector from './CardSelector'
import ColorSelector from './ColorSelector'
import CoverImageUploader from './CoverImageUploader'
import ProfileImageUploader from './ProfileImageUploader'

export default function DisplayTab() {
  return (
    <TabsContent value='display'>
      <CardSelector getter='cardDetails' setter={setCardDetails} />
      <ColorSelector />
      <ProfileImageUploader />
      <CoverImageUploader />
    </TabsContent>
  )
}
