import { TabsContent } from '@/components/ui/tabs'
import Links from '../../add-card/Tabs/Advanced/Links'
import PortfolioItems from '../../add-card/Tabs/Advanced/PortfolioItems'

export default function AdvancedUpdateTab({ cardId }) {
  //TODO: add delete activity and link delete functionality when apis arrive
  return (
    <TabsContent value='advanced-update'>
      <PortfolioItems cardId={cardId} showDeleteButton />
      <Links cardId={cardId} showDeleteButton />
    </TabsContent>
  )
}
