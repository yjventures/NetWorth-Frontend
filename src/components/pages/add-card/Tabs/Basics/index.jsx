import { TabsContent } from '@/components/ui/tabs'
import CardNameNType from './CardNameNType'
import DrgaggableTextContainer from './DraggableTexts'

export default function BasicsTab() {
  return (
    <TabsContent value='basics'>
      <DrgaggableTextContainer />
      <CardNameNType />
    </TabsContent>
  )
}
