'use client'

import sliderImage1 from '@/assets/images/homepage/firstslide.png'
import sliderImage2 from '@/assets/images/homepage/secondSlide.png'
import sliderImage2_2 from '@/assets/images/homepage/secondSlide2.png'
import sliderImage3 from '@/assets/images/homepage/thirdSlide.png'
import animationData from '@/assets/lottie/scanning.json'
import { Button } from '@/components/ui/button'
import { Img } from '@/components/ui/img'
import LLink from '@/components/ui/llink'
import Overlay from '@/components/ui/overlay'
import { API_URL } from '@/configs'
import usePush from '@/hooks/usePush'
import { useOCRMutation } from '@/redux/features/cardsApi'
import { setCardTexts } from '@/redux/features/slices/tempCardSlice'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Home() {
  const push = usePush()
  const dispatch = useDispatch()
  const cameraInputRef = useRef(null)

  const [scanCard, { isLoading, isSuccess, isError, error, data }] = useOCRMutation()

  const [isUploading, setisUploading] = useState(false)

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
      toast.success('Uploading file, please wait...')
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
      toast.success('Card Scanned Successfully!')
      dispatch(setCardTexts(data?.data?.form_text))
      push('/signup/via-card')
    }
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error])

  return (
    <main className='container'>
      <Swiper
        slidesPerView={1}
        pagination={{
          dynamicBullets: true
        }}
        spaceBetween={100}
        modules={[Pagination]}
        className='h-[90dvh]'
      >
        <SwiperSlide>
          <div className='flex flex-col gap-20 items-center justify-center h-full'>
            <Img src={sliderImage1} alt='slider image 1' className='max-w-72' />
            <p className='text-center text-muted-foreground'>
              Dummy text is also used to demonstrate the appearance of different typefaces and layouts
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col gap-20 items-center justify-center h-full'>
            <div className='flex flex-col w-full items-center gap-5'>
              <Img src={sliderImage2_2} alt='slider image 1' className='max-w-20 self-end' />
              <Img src={sliderImage2} alt='slider image 1' className='max-w-72' />
            </div>
            <p className='text-center text-muted-foreground'>
              Dummy text is also used to demonstrate the appearance of different typefaces and layouts
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col gap-5 items-center justify-center h-full'>
            <div className='flex flex-col gap-20 items-center justify-center'>
              <Img src={sliderImage3} alt='slider image 1' className='max-w-72' />
              <p className='text-center text-muted-foreground'>
                Dummy text is also used to demonstrate the appearance of different typefaces and layouts
              </p>
            </div>
            <div className='w-full space-y-5'>
              <LLink href='/signup'>
                <Button className='w-full h-14 rounded-2xl'>Sign up with email</Button>
              </LLink>
              <Button
                className='w-full h-14 rounded-2xl'
                variant='tartiary'
                onClick={() => cameraInputRef.current.click()}
              >
                Scan Business Card
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
          </div>
        </SwiperSlide>
      </Swiper>
      <Overlay isOpen={isUploading || isLoading} animationData={animationData} />
    </main>
  )
}
