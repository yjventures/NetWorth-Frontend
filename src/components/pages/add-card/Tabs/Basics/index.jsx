import { TabsContent } from '@/components/ui/tabs'
import CardNameNType from './CardNameNType'
import DragInputs from './DragInputs'
import DrgaggableTextContainer from './DraggableTexts'

export default function BasicsTab() {
  return (
    <TabsContent value='basics'>
      <DrgaggableTextContainer />
      <div className='max-h-[52vh] overflow-y-auto mt-5'>
        <CardNameNType />
        <DragInputs />
      </div>
    </TabsContent>
  )
}
