import { SOCIAL_PLATFORMS } from '.'

export default function SingleLink({ platform, links }) {
  const link = links?.find(p => p.platform === platform)
  const linkWithIcon = SOCIAL_PLATFORMS?.find(p => p.platform === platform)
  return (
    <>
      {link ? (
        <div className='flex items-center gap-2'>
          <span>{linkWithIcon?.icon}</span>
          <a href={link?.link} target='_blank' rel='noreferrer' className='text-sky-700'>
            {link?.link}
          </a>
        </div>
      ) : null}
    </>
  )
}
