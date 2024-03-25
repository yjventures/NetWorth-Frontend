import { TabsContent } from '@/components/ui/tabs'
import { setUpdateCardDetails } from '@/redux/features/slices/tempCardSlice'
import CardSelector from '../../add-card/Tabs/Display/CardSelector'
import ColorSelector from '../../add-card/Tabs/Display/ColorSelector'
import CoverImageUploader from '../../add-card/Tabs/Display/CoverImageUploader'
import ProfileImageUploader from '../../add-card/Tabs/Display/ProfileImageUploader'

export default function DisplayUpdateTab() {
  return (
    <TabsContent value='display-update'>
      <CardSelector getter='updateCardDetails' setter={setUpdateCardDetails} />
      <ColorSelector getter='updateCardDetails' setter={setUpdateCardDetails} />
      <ProfileImageUploader getter='updateCardDetails' setter={setUpdateCardDetails} />
      <CoverImageUploader getter='updateCardDetails' setter={setUpdateCardDetails} />
    </TabsContent>
  )
}
