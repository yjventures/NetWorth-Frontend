import { X } from 'lucide-react'
import { SOCIAL_PLATFORMS } from '.'

export default function SingleLink({ platform, links, showDeleteButton = false }) {
  const link = links?.find(p => p.platform === platform)
  const linkWithIcon = SOCIAL_PLATFORMS?.find(p => p.platform === platform)
  return (
    <>
      {link ? (
        <div className='flex items-center justify-between gap-2'>
          <div className='flex items-center gap-2'>
            <span>{linkWithIcon?.icon}</span>
            <a href={link?.link} target='_blank' rel='noreferrer' className='text-sky-700'>
              {link?.link}
            </a>
          </div>
          {showDeleteButton ? <X className='size-5 cursor-pointer' /> : null}
        </div>
      ) : null}
    </>
  )
}
