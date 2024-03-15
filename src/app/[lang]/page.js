'use client'

import sliderImage1 from '@/assets/images/homepage/firstslide.png'
import sliderImage2 from '@/assets/images/homepage/secondSlide.png'
import sliderImage2_2 from '@/assets/images/homepage/secondSlide2.png'
import sliderImage3 from '@/assets/images/homepage/thirdSlide.png'
import { Button } from '@/components/ui/button'
import { Img } from '@/components/ui/img'
import LLink from '@/components/ui/llink'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Home() {
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
              <Button className='w-full h-14 rounded-2xl' variant='tartiary'>
                Scan Business Card
              </Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  )
}
