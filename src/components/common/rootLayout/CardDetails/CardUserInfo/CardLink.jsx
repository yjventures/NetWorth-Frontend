import { SOCIAL_PLATFORMS } from '@/components/pages/add-card/Tabs/Advanced/Links'

export default function CardLink({ platform, links }) {
  const link = links?.find(p => p.platform === platform)
  const linkWithIcon = SOCIAL_PLATFORMS?.find(p => p.platform === platform)
  return (
    <>
      {link ? (
        <div className='flex items-center gap-2'>
          <span className='text-primary'>{linkWithIcon?.icon}</span>
          <a href={link?.link} target='_blank' rel='noreferrer' className='font-medium'>
            {platform}
          </a>
        </div>
      ) : null}
    </>
  )
}
