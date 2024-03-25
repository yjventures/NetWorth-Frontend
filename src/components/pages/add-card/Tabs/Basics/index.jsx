import { TabsContent } from '@/components/ui/tabs'
import { setCardDetails } from '@/redux/features/slices/tempCardSlice'
import CardNameNType from './CardNameNType'
import DragInputs from './DragInputs'
import DrgaggableTextContainer from './DraggableTexts'

export default function BasicsTab() {
  return (
    <TabsContent value='basics'>
      <DrgaggableTextContainer />
      <div className='max-h-[50dvh] overflow-y-auto mt-5'>
        <CardNameNType getter='cardDetails' setter={setCardDetails} />
        <DragInputs getter='cardDetails' setter={setCardDetails} />
      </div>
    </TabsContent>
  )
}
