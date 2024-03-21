'use client'

import { Button } from '@/components/ui/button'
import DndMultipleUpload from '@/components/ui/dnd-multiple-upload'
import { Img } from '@/components/ui/img'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import LLink from '@/components/ui/llink'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import Typography from '@/components/ui/typography'
import usePush from '@/hooks/usePush'
import { useCreateActivityMutation } from '@/redux/features/activitiesApi'
import { setMaxDate } from '@/utils/date/setMaxDate'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { getCookie } from 'cookies-next'
import { ChevronLeft, X } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function AddActivityPage() {
  const push = usePush()
  const params = useSearchParams()
  const from = params.has('from') && params.get('from')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [attachments, setattachments] = useState([])
  const [currently_ongoing, setcurrently_ongoing] = useState(false)

  const [createActivity, { isSuccess, isError, error }] = useCreateActivityMutation()

  const onSubmit = data => {
    const allData = { ...data, attachments, currently_ongoing }
    if (from === 'add-card') {
      createActivity({ cardId: getCookie('cardId'), payload: allData })
    }
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('Added activity successfully!')
      if (from === 'add-card') {
        push('/cards/add')
      }
    }
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error, push, from])

  return (
    <div className='py-10 container'>
      <LLink href='/'>
        <Button variant='icon' className='shadow-sm px-3 h-10 rounded-lg'>
          <ChevronLeft className='size-6' />
        </Button>
      </LLink>

      <Typography variant='h1' className='font-medium pt-5'>
        Add Activity
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        {attachments.length ? (
          <div className='flex flex-col gap-3 my-6'>
            {attachments?.map(attachment => (
              <div className='flex items-center gap-5' key={attachment}>
                <Img
                  src={attachment}
                  alt='Profile Image'
                  className='height-40 aspect-video object-cover'
                  sizes='500px'
                />
                <X
                  className='size-8 cursor-pointer'
                  onClick={() => setattachments(attachments.filter(a => a !== attachment))}
                />
              </div>
            ))}
          </div>
        ) : (
          <DndMultipleUpload setUploadURL={setattachments} className='my-6' />
        )}

        <Input name='name' register={register} errors={errors} label='Name' required placeholder='Name' />
        <Label className='mb-2 inline-block' htmlFor='start_date'>
          Start Date
        </Label>
        <Input
          id='start_date'
          name='start_date'
          type='date'
          register={register}
          errors={errors}
          label='Start Date'
          max={setMaxDate()}
          required
        />
        <Label className='mb-2 inline-block' htmlFor='end_date'>
          End Date
        </Label>
        <Input
          name='end_date'
          type='date'
          register={register}
          errors={errors}
          label='Start Date'
          max={setMaxDate()}
          disabled={currently_ongoing}
        />
        <div className='flex items-center space-x-2 mt-3 mb-8'>
          <Switch id='currently_ongoing' checked={currently_ongoing} onCheckedChange={setcurrently_ongoing} />
          <Label htmlFor='currently_ongoing'>Currently Ongoing</Label>
        </div>
        <Textarea
          name='description'
          rows={6}
          register={register}
          errors={errors}
          label='Description'
          placeholder='Description'
          className='mb-6'
        />
        <Input name='link' register={register} errors={errors} label='Link' type='url' placeholder='link' />
        <Button type='submit' className='w-full mt-6'>
          Add Activity
        </Button>
      </form>
    </div>
  )
}
