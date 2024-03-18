'use client'

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
import { API_URL } from '@/configs'
import { useOCRMutation } from '@/redux/features/cardsApi'
import axios from 'axios'
import { useEffect, useRef } from 'react'
import toast from 'react-hot-toast'

export default function AddCardPromtDialog({ open, setopen }) {
  const cameraInputRef = useRef(null)

  const [scanCard, { isLoading, isSuccess, isError, error, data }] = useOCRMutation()

  const handleImageChange = e => {
    const files = e.target.files
    if (files.length) {
      uploadFile(files[0])
    }
  }

  const uploadFile = async file => {
    const formData = new FormData()
    formData.append('file', file)

    try {
      toast.success('Uploading file, please wait...')
      const response = await axios.post(`${API_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      if (response?.data?.status) {
        toast.success('File uploaded successfully!')
        scanCard({ imageUrl: response?.data?.uploadedUrl })
      }
    } catch (error) {
      console.error('Error uploading file', error)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('Card Scanned Successfully!')
      console.log(data)
    }
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error, data])

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
            <Button
              className='rounded-md'
              onClick={() => {
                cameraInputRef.current.click()
                setopen(false)
              }}
            >
              Add Card
            </Button>
            <input
              className='hidden'
              type='file'
              accept='image/*'
              capture='environment'
              onChange={handleImageChange}
              ref={cameraInputRef}
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
