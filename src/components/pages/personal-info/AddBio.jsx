import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { PlusCircle } from 'lucide-react'

export default function AddBio({ register, errors }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='pt-5 flex justify-center'>
          <Button variant='default' className='rounded-lg h-10'>
            <PlusCircle /> Add Bio
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className='max-w-sm rounded-md'>
        <DialogHeader>
          <DialogTitle>Add Bio</DialogTitle>
          <DialogDescription>Express yourself in a few words</DialogDescription>
        </DialogHeader>
        <Textarea
          name='bio'
          placeholder='Write your bio'
          register={register}
          errors={errors}
          className='rounded-lg'
          rows={5}
        />
        <DialogFooter>
          <DialogClose>
            <Button className='rounded-lg w-full'>Add Bio</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
