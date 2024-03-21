'use client'

import addCardPromptImg from '@/assets/images/add-card/add-card-prompt.jpeg'
import animationData from '@/assets/lottie/scanning.json'
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
import Overlay from '@/components/ui/overlay'
import { API_URL } from '@/configs'
import usePush from '@/hooks/usePush'
import { useCreateEmptyCardMutation, useOCRMutation } from '@/redux/features/cardsApi'
import { setCardId, setCardTexts } from '@/redux/features/slices/tempCardSlice'
import axios from 'axios'
import { setCookie } from 'cookies-next'
import { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

export default function AddCardPromtDialog({ open, setopen }) {
  const push = usePush()
  const dispatch = useDispatch()
  const cameraInputRef = useRef(null)

  const [scanCard, { isLoading, isSuccess, isError, error, data }] = useOCRMutation()

  const [isUploading, setisUploading] = useState(false)

  const [createEmptyCard, { isSuccess: isCardSuccess, data: cardData, isError: isCardError, error: cardError }] =
    useCreateEmptyCardMutation()

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
      setisUploading(true)
      const response = await axios.post(`${API_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      if (response?.data?.status) {
        scanCard({ imageUrl: response?.data?.uploadedUrl })
        setisUploading(false)
      }
    } catch (error) {
      setisUploading(false)
      console.error('Error uploading file', error)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      setopen(false)
      toast.success('Card Scanned Successfully!')
      dispatch(setCardTexts(data?.data?.form_text))
      createEmptyCard()
    }
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error])

  useEffect(() => {
    if (isCardSuccess) {
      toast.success('Card intialization successfull!')
      push('/cards/add')
      setCookie('cardId', cardData?.data?._id)
      dispatch(setCardId(cardData?.data?._id))
    }
    if (isCardError) toast.error(rtkErrorMesage(cardError))
  }, [isCardSuccess, isCardError, cardError, dispatch, push])

  return (
    <>
      <Dialog open={open} onOpenChange={setopen} suppressHydrationWarning>
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
              <Button className='rounded-md' onClick={() => cameraInputRef.current.click()}>
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
      <Overlay isOpen={isUploading || isLoading} animationData={animationData} />
    </>
  )
}
