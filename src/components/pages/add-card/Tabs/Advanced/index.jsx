import { TabsContent } from '@/components/ui/tabs'
import Links from './Links'
import PortfolioItems from './PortfolioItems'

export default function AdvancedTab() {
  return (
    <TabsContent value='advanced'>
      <PortfolioItems />
      <Links />
    </TabsContent>
  )
}
