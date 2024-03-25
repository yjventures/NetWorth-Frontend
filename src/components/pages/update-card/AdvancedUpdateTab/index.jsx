import { TabsContent } from '@/components/ui/tabs'
import PortfolioItems from '../../add-card/Tabs/Advanced/PortfolioItems'

export default function AdvancedUpdateTab({ cardId }) {
  return (
    <TabsContent value='advanced-update'>
      <PortfolioItems cardId={cardId} showDeleteButton />
    </TabsContent>
  )
}
