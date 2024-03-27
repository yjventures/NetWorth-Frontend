'use client'

import AddBio from '@/components/pages/personal-info/AddBio'
import AddCardPromtDialog from '@/components/pages/personal-info/AddCardPromtDialog'
import ProfilePhotoUploadComponent from '@/components/pages/personal-info/ProfilePhotoUploadComponent'
import { Button } from '@/components/ui/button'
import ConfirmationPrompt from '@/components/ui/confirmation-prompt'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import LLink from '@/components/ui/llink'
import { Textarea } from '@/components/ui/textarea'
import Typography from '@/components/ui/typography'
import usePush from '@/hooks/usePush'
import { useCreateEmptyCardMutation } from '@/redux/features/cardsApi'
import { useGetPersonalInfoQuery, useUpdatePersoanlInfoMutation } from '@/redux/features/usersApi'
import { setMaxDate } from '@/utils/date/setMaxDate'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { setCookie } from 'cookies-next'
import { ChevronLeft, FilePenLine, PlusCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import PhoneInput from 'react-phone-input-2'
import { useSelector } from 'react-redux'

export default function PersonalInfoPage() {
  const push = usePush()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm()

  const [profile_image, setprofile_image] = useState('')
  const [phone_number, setphone_number] = useState('')
  const [bio, setbio] = useState('')

  const { data } = useGetPersonalInfoQuery()

  useEffect(() => {
    const personalInfo = data?.data?.user?.personal_info
    if (personalInfo) {
      setprofile_image(personalInfo?.profile_image)
      setphone_number(personalInfo?.phone_number)
      setbio(personalInfo?.bio)
      setValue('address', personalInfo?.address)
      setValue('designation', personalInfo?.designation)
      setValue('date_of_birth', personalInfo?.date_of_birth)
    }
  }, [data, setValue])

  const [updateProfile, { isSuccess, isError, error }] = useUpdatePersoanlInfoMutation()

  const { cardTexts } = useSelector(state => state.tempCard)

  const [showPrompt, setshowPrompt] = useState(false)

  const onSubmit = data => {
    const allData = {
      ...data,
      profile_image,
      phone_number: phone_number.includes('+') ? phone_number : `+${phone_number}`
    }
    updateProfile(allData)
  }

  const [open, setopen] = useState(false)

  useEffect(() => {
    if (isSuccess) {
      toast.success('Profile updated successfully!')

      if (cardTexts?.length) {
        setshowPrompt(true)
      } else {
        setopen(true)
      }
    }
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error])

  const [createEmptyCard, { isSuccess: isCardSuccess, data: cardData, isError: isCardError, error: cardError }] =
    useCreateEmptyCardMutation()

  useEffect(() => {
    if (isCardSuccess) {
      toast.success('Card intialization successfull!')
      push('/cards/add')
      setCookie('cardId', cardData?.data?._id)
    }
    if (isCardError) toast.error(rtkErrorMesage(cardError))
  }, [isCardSuccess, isCardError, cardError, push])

  return (
    <div suppressHydrationWarning>
      <div className='py-10 container max-w-md'>
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
          {bio ? <p className='text-balance text-center font-medium italic pt-3'>{bio}</p> : null}
          <AddBio
            bio={bio}
            setbio={setbio}
            label={
              bio ? (
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
              inputClass='block !w-full px-3.5 py-[25px] ring-inset ring-primary placeholder:text-gray-light focus:ring-inset focus:ring-bg-primary-dark sm:text-sm sm:leading-6 ring-0 !bg-transparent !border-opacity-50 rounded-2xl h-full shadow-none focus:ring-[1px] outline-none !ext-lg py-5'
              buttonClass='!border-0 px-3.5 py-6 ring-inset ring-primary placeholder:text-gray-light focus:ring-inset focus:ring-bg-primary-dark sm:text-sm sm:leading-6 ring-0 !bg-transparent rounded-2xl shadow-none focus:ring outline-none'
            />
            <Textarea
              name='address'
              placeholder='Write down your address'
              rows={3}
              register={register}
              errors={errors}
            />
            <div className='space-y-1'>
              <Label htmlFor='date_of_birth'>Date of Birth</Label>
              <Input
                id='date_of_birth'
                name='date_of_birth'
                type='date'
                placeholder='Date of birth'
                register={register}
                errors={errors}
                max={setMaxDate(18)}
              />
            </div>
            <Button type='submit' className='w-full'>
              Update Profile
            </Button>
          </div>
        </form>
      </div>
      <AddCardPromtDialog open={open} setopen={setopen} />
      <ConfirmationPrompt
        title='Do you want to use the previously scanned card to add a card?'
        open={showPrompt}
        setopen={setshowPrompt}
        cb={() => createEmptyCard()}
        rejectionCb={() => setopen(true)}
      />
    </div>
  )
}
