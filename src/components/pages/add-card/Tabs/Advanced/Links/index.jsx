'use client'

import SingleAccordion from '@/components/pages/common/SingleAccordion'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { SimpleInput } from '@/components/ui/simple-input'
import { useCreateLinkMutation } from '@/redux/features/linksApi'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { getCookie } from 'cookies-next'
import { Facebook, Github, Globe, Instagram, Linkedin, Twitter } from 'lucide-react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const SOCIALPLATFORMS = [
  { id: 1, platform: 'Facebook', icon: <Facebook className='size-4' /> },
  { id: 2, platform: 'Instagram', icon: <Instagram className='size-4' /> },
  { id: 3, platform: 'X', icon: <Twitter className='size-4' /> },
  { id: 4, platform: 'Github', icon: <Github className='size-4' /> },
  { id: 5, platform: 'LinkedIn', icon: <Linkedin className='size-4' /> },
  { id: 6, platform: 'Website', icon: <Globe className='size-4' /> }
]

export default function Links() {
  const [link, setlink] = useState('')
  const [open, setopen] = useState(false)

  const [addLink, { isSuccess, isError, error }] = useCreateLinkMutation()

  useEffect(() => {
    if (isSuccess) {
      toast.success('Added link successfully!')
      setopen(false)
    }
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error])
  return (
    <section>
      <SingleAccordion value='links' label='Links'>
        <div className='flex flex-wrap gap-3'>
          {SOCIALPLATFORMS.map(platform => (
            <Dialog key={platform.id} open={open} onOpenChange={setopen}>
              <DialogTrigger asChild>
                <div>
                  <Button variant='outline' className='gap-2 h-8 rounded-md border-secondary-foreground px-2'>
                    <span>{platform.icon}</span>
                    <span>{platform.platform}</span>
                  </Button>
                </div>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                  <DialogTitle>Add Link</DialogTitle>
                </DialogHeader>
                <div>
                  <div className='flex items-center gap-3 mb-3'>
                    <span>{platform.icon}</span>
                    <span>{platform.platform}</span>
                  </div>
                  <SimpleInput
                    value={link}
                    onChange={e => setlink(e.target.value)}
                    placeholder='https://example.com'
                    type='url'
                  />
                </div>
                <DialogFooter>
                  <Button
                    className='rounded-md'
                    onClick={() =>
                      addLink({ cardId: getCookie('cardId'), payload: { platform: platform.platform, link } })
                    }
                  >
                    Add Link
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </SingleAccordion>
    </section>
  )
}
