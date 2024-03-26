'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { SimpleTextarea } from '@/components/ui/simple-textarea'
import { cn } from '@/lib/utils'
import { useUpdateCardStatusMutation } from '@/redux/features/cardsApi'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { PencilLine, PlusCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function AddStatusModal({ status: prevStatus, hideContent, cardId }) {
  const [open, setopen] = useState(false)
  const [status, setstatus] = useState(prevStatus)

  const [updateStatus, { isSuccess, isError, error }] = useUpdateCardStatusMutation()

  const addStatus = async e => {
    e.preventDefault()
    updateStatus({ cardId, payload: status })
    setopen(false)
  }

  useEffect(() => {
    if (isSuccess) toast.success('Status updated successfully!')
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error])

  return (
    <Dialog open={open} onOpenChange={setopen}>
      <DialogTrigger asChild>
        <p className={cn('flex items-center gap-2 font-medium text-sm cursor-pointer', { hidden: hideContent })}>
          {prevStatus ? (
            <>
              {prevStatus} <PencilLine className='size-5' />
            </>
          ) : (
            <>
              <PlusCircle className='size-5' />
              Say Something
            </>
          )}
        </p>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <form onSubmit={addStatus}>
          <DialogHeader>
            <DialogTitle>Add your status</DialogTitle>
            <DialogDescription>
              Write something in short words to let everyone know your current status
            </DialogDescription>
          </DialogHeader>

          <SimpleTextarea
            value={status}
            className='mt-3'
            onChange={e => setstatus(e.target.value)}
            placeholder='Write your status...'
            rows={5}
          />
          <DialogFooter>
            <Button type='submit' className='mt-5'>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
