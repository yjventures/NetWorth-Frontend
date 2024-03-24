import { Globe, MapPin } from 'lucide-react'
import FullviewLink from './FullviewLink'

export default function FullviewUserInfo({ data, setCondensedView }) {
  const webLink = data?.links?.find(l => l.platform === 'Website')?.link
  return (
    <section className='px-5'>
      <p className='text-primary font-semibold cursor-pointer' onClick={setCondensedView}>
        Condensed View
      </p>
      <p className='text-sm text-muted-foreground'>{data?.bio}</p>
      <div className='space-y-3 my-5'>
        <div className='flex items-center gap-2'>
          <MapPin className='size-5' />
          <p className='text-sm font-medium'>{data?.address}</p>
        </div>
        {webLink ? (
          <div className='flex items-center gap-2'>
            <Globe className='size-5' />
            <a href={webLink} target='_blank' rel='noreferrer noopen' className='text-sm font-medium'>
              {webLink}
            </a>
          </div>
        ) : null}
        <FullviewLink links={data?.links} platform='Facebook' />
        <FullviewLink links={data?.links} platform='Instagram' />
        <FullviewLink links={data?.links} platform='X' />
        <FullviewLink links={data?.links} platform='Github' />
        <FullviewLink links={data?.links} platform='LinkedIn' />
      </div>
    </section>
  )
}
