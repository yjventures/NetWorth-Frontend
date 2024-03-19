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
import { SimpleTextarea } from '@/components/ui/simple-textarea'

export default function AddBio({ bio, setbio, label }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='pt-5 flex justify-center'>
          <Button variant='default' className='rounded-lg h-10'>
            {label}
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className='max-w-sm rounded-md'>
        <DialogHeader>
          <DialogTitle>Add Bio</DialogTitle>
          <DialogDescription>Express yourself in a few words</DialogDescription>
        </DialogHeader>
        <SimpleTextarea
          placeholder='Write your bio'
          value={bio}
          onChange={e => setbio(e.target.value)}
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
