import { TabsContent } from '@/components/ui/tabs'
import { useGetLinksQuery } from '@/redux/features/linksApi'
import SocialLink from './SocialLink'

export default function LinksTab({ cardId }) {
  const { data } = useGetLinksQuery(cardId)
  return (
    <TabsContent value='links'>
      <div className='space-y-3'>
        {data?.data?.map(link => (
          <SocialLink key={link?._id} platform={link?.platform} link={link?.link} />
        ))}
      </div>
    </TabsContent>
  )
}
