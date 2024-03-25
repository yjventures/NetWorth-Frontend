import { Skeleton } from '@/components/ui/skeleton'
import { TabsContent } from '@/components/ui/tabs'
import { useGetLinksQuery } from '@/redux/features/linksApi'
import SocialLink from './SocialLink'

export default function LinksTab({ cardId }) {
  const { data, isLoading, isSuccess } = useGetLinksQuery(cardId)
  return (
    <TabsContent value='links'>
      {isLoading ? (
        <div className='space-y-3'>
          {[
            ...Array(5)
              .fill()
              .map(i => <Skeleton key={i} className='w-full h-40' />)
          ]}
        </div>
      ) : null}
      {isSuccess ? (
        <div className='space-y-3'>
          {data?.data?.map(link => (
            <SocialLink key={link?._id} platform={link?.platform} link={link?.link} />
          ))}
        </div>
      ) : null}
    </TabsContent>
  )
}
