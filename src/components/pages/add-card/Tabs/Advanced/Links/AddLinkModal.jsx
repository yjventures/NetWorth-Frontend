'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { SimpleInput } from '@/components/ui/simple-input'
import { useCreateLinkMutation } from '@/redux/features/linksApi'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function AddLinkModal({ platform }) {
  const [link, setlink] = useState(platform.prefilledLink)
  const [open, setopen] = useState(false)
  const [addLink, { isSuccess, isError, error }] = useCreateLinkMutation()

  useEffect(() => {
    if (isSuccess) {
      toast.success('Added link successfully!')
      setopen(false)
    }
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error])

  const addLinkFn = e => {
    e.preventDefault()
    addLink({ cardId: getCookie('cardId'), payload: { platform: platform.platform, link } })
  }

  return (
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
        <form onSubmit={addLinkFn}>
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
            <Button className='rounded-md mt-5' type='submit'>
              Add Link
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
