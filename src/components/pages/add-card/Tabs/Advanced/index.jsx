import { TabsContent } from '@/components/ui/tabs'
import PortfolioItems from './PortfolioItems'

export default function AdvancedTab() {
  return (
    <TabsContent value='advanced'>
      <PortfolioItems />
    </TabsContent>
  )
}
