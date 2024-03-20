'use client'

import SingleAccordion from '@/components/pages/common/SingleAccordion'
import { Facebook, Github, Globe, Instagram, Linkedin, Twitter } from 'lucide-react'

import { useGetLinksQuery } from '@/redux/features/linksApi'
import { getCookie } from 'cookies-next'
import AddLinkModal from './AddLinkModal'
import SingleLink from './SingleLink'

export const SOCIAL_PLATFORMS = [
  { id: 1, platform: 'Facebook', icon: <Facebook className='size-4' /> },
  { id: 2, platform: 'Instagram', icon: <Instagram className='size-4' /> },
  { id: 3, platform: 'X', icon: <Twitter className='size-4' /> },
  { id: 4, platform: 'Github', icon: <Github className='size-4' /> },
  { id: 5, platform: 'LinkedIn', icon: <Linkedin className='size-4' /> },
  { id: 6, platform: 'Website', icon: <Globe className='size-4' /> }
]

export default function Links() {
  const { data } = useGetLinksQuery(getCookie('cardId'))
  const availablePlatforms = SOCIAL_PLATFORMS.filter(
    platform => !data?.data?.some(link => link.platform === platform.platform)
  )
  return (
    <SingleAccordion value='links' label='Links'>
      {data?.data?.length ? <p className='font-medium'>Added links</p> : null}
      <div className='space-y-3 mt-2 mb-4'>
        <SingleLink links={data?.data} platform='Facebook' />
        <SingleLink links={data?.data} platform='Instagram' />
        <SingleLink links={data?.data} platform='X' />
        <SingleLink links={data?.data} platform='Github' />
        <SingleLink links={data?.data} platform='LinkedIn' />
        <SingleLink links={data?.data} platform='Website' />
      </div>
      <div className='flex flex-wrap gap-3'>
        {availablePlatforms.map(platform => (
          <AddLinkModal key={platform.id} platform={platform} />
        ))}
      </div>
    </SingleAccordion>
  )
}
