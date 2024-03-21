import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { CheckCircle, XCircle } from 'lucide-react'
import { Button } from './button'

export default function ConfirmationPrompt({ open, onOpenChange, cb }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-sm'>
        <DialogHeader className='sm:text-center'>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <DialogFooter className='items-center sm:justify-center gap-5 mt-10'>
          <DialogClose>
            <Button className='px-12 flex items-center gap-2 rounded-lg h-12' onClick={cb}>
              <CheckCircle className='w-5 h-5' /> Yes
            </Button>
          </DialogClose>
          <DialogClose>
            <Button className='px-12 flex items-center gap-2 rounded-lg h-12' variant='destructive'>
              <XCircle className='w-5 h-5' /> No
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
