import { TabsContent } from '@/components/ui/tabs'
import { getCookie } from 'cookies-next'
import Links from './Links'
import PortfolioItems from './PortfolioItems'

export default function AdvancedTab() {
  const cardId = getCookie('cardId')
  return (
    <TabsContent value='advanced'>
      <PortfolioItems cardId={cardId} />
      <Links />
    </TabsContent>
  )
}
