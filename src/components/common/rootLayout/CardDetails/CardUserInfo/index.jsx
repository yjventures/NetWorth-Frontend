import { Separator } from '@/components/ui/separator'
import Typography from '@/components/ui/typography'
import CardContactLink from './CardContactLink'
import CardLink from './CardLink'

export default function CardUserInfo({ data }) {
  const webLink = data?.links?.find(l => l.platform === 'Website')?.link
  return (
    <section className='px-4'>
      <div className='flex items-center justify-between'>
        <Typography variant='h3'>{data?.name}</Typography>
        <p className='text-primary font-semibold'>Full View</p>
      </div>
      <p className='text-lg mt-5 mb-4'>{data?.designation}</p>
      <div className='flex items-center gap-3 flex-wrap'>
        <CardLink links={data?.links} platform='Facebook' />
        <CardLink links={data?.links} platform='Instagram' />
        <CardLink links={data?.links} platform='X' />
        <CardLink links={data?.links} platform='Github' />
        <CardLink links={data?.links} platform='LinkedIn' />
        <CardLink links={data?.links} platform='Website' />
      </div>

      <Separator className='my-5' />

      <p className='text-sm'>{data?.bio}</p>

      <div className='pt-10'>
        <CardContactLink value={data?.phone_number?.[0]} type='tel' />
        <CardContactLink value={data?.email} type='mail' />
        {webLink ? <CardContactLink value={webLink} type='web' /> : null}
      </div>
    </section>
  )
}
