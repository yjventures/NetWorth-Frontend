import { TabsContent } from '@/components/ui/tabs'
import CardNameNType from './CardNameNType'
import DragInputs from './DragInputs'
import DrgaggableTextContainer from './DraggableTexts'

export default function BasicsTab() {
  return (
    <TabsContent value='basics'>
      <DrgaggableTextContainer />
      <CardNameNType />
      <DragInputs />
    </TabsContent>
  )
}
