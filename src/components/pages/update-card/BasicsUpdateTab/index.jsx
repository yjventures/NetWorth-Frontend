import { TabsContent } from '@/components/ui/tabs'
import { setUpdateCardDetails } from '@/redux/features/slices/tempCardSlice'
import CardNameNType from '../../add-card/Tabs/Basics/CardNameNType'
import DragInputs from '../../add-card/Tabs/Basics/DragInputs'

export default function BasicsUpdateTab() {
  return (
    <TabsContent value='basics-update'>
      <CardNameNType getter='updateCardDetails' setter={setUpdateCardDetails} />
      <DragInputs getter='updateCardDetails' setter={setUpdateCardDetails} />
    </TabsContent>
  )
}
