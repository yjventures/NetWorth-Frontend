import addCardPromptImg from '@/assets/images/add-card/add-card-prompt.jpeg'
import { Button } from '@/components/ui/button'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Img } from '@/components/ui/img'

export default function AddCardPromtDialog({ open, setopen }) {
  return (
    <Dialog open={open} onOpenChange={setopen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-center'>Now add your first card</DialogTitle>
          <DialogDescription className='text-center'>
            <Img src={addCardPromptImg} alt='add-card-prompt' className='w-3/4 text-center inline-block my-3' />
            <p className='text-balance'>
              Add your first ever card in your card list. Simply take a picture of your card and drag n drop texts in
              the input.
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className='flex justify-center gap-3'>
            <DialogClose>
              <Button className='rounded-md' variant='secondary'>
                Cancel
              </Button>
            </DialogClose>
            <Button className='rounded-md'>Add Card</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
