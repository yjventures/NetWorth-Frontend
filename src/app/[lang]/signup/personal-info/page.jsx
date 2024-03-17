'use client'

import AddBio from '@/components/pages/personal-info/AddBio'
import ProfilePhotoUploadComponent from '@/components/pages/personal-info/ProfilePhotoUploadComponent'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import LLink from '@/components/ui/llink'
import { Textarea } from '@/components/ui/textarea'
import Typography from '@/components/ui/typography'
import usePush from '@/hooks/usePush'
import { useUpdatePersoanlInfoMutation } from '@/redux/features/usersApi'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { ChevronLeft, FilePenLine, PlusCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import PhoneInput from 'react-phone-input-2'

export default function PersonalInfoPage() {
  const push = usePush()
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [profile_image, setprofile_image] = useState('')
  const [phone_number, setphone_number] = useState('')

  const [updateProfile, { isSuccess, isError, error }] = useUpdatePersoanlInfoMutation()

  const onSubmit = data => {
    const allData = { ...data, profile_image, phone_number: phone_number ? `+${phone_number}` : '' }
    updateProfile(allData)
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('Profile updated successfully!')
      push('/add-card')
    }
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error, push])

  return (
    <div className='py-10 container'>
      <LLink href='/'>
        <Button variant='icon' className='shadow-sm px-3 h-10 rounded-lg'>
          <ChevronLeft className='size-6' />
        </Button>
      </LLink>

      <Typography variant='h1' className='font-medium py-5 text-center'>
        Update Profile
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProfilePhotoUploadComponent profile_image={profile_image} setprofile_image={setprofile_image} />
        {getValues('bio') ? (
          <p className='text-balance text-center font-medium italic pt-3'>{getValues('bio')}</p>
        ) : null}
        <AddBio
          register={register}
          errors={errors}
          label={
            getValues('bio') ? (
              <div className='flex items-center gap-2'>
                <FilePenLine className='size-5' />
                Update Bio
              </div>
            ) : (
              <div className='flex items-center gap-2'>
                <PlusCircle className='size-5' />
                Add Bio
              </div>
            )
          }
        />
        <div className='space-y-4 mt-6'>
          <PhoneInput
            country={'sa'}
            id='phone_number'
            value={phone_number}
            onChange={val => setphone_number(val)}
            enableSearch
            containerClass='text-lg bg-gray-50'
            inputClass='block !w-full max-w-[360px] px-3.5 py-[25px] ring-inset ring-primary placeholder:text-gray-light focus:ring-inset focus:ring-bg-primary-dark sm:text-sm sm:leading-6 ring-0 !bg-transparent !border-opacity-50 rounded-2xl h-full shadow-none focus:ring-[1px] outline-none !ext-lg py-5'
            buttonClass='!border-0 px-3.5 py-6 ring-inset ring-primary placeholder:text-gray-light focus:ring-inset focus:ring-bg-primary-dark sm:text-sm sm:leading-6 ring-0 !bg-transparent rounded-2xl shadow-none focus:ring outline-none'
          />
          <Textarea name='address' placeholder='Write down your address' rows={3} register={register} errors={errors} />
          <Input name='designation' placeholder='Designation' register={register} errors={errors} />
          <div className='space-y-1'>
            <Label htmlFor='date_of_birth'>Date of Birth</Label>
            <Input
              id='date_of_birth'
              name='date_of_birth'
              type='date'
              placeholder='Designation'
              register={register}
              errors={errors}
            />
          </div>
          <Button type='submit' className='w-full'>
            Update Profile
          </Button>
        </div>
      </form>
    </div>
  )
}
