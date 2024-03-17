'use client'

import ProfilePhotoUploadComponent from '@/components/pages/personal-info/ProfilePhotoUploadComponent'
import { Button } from '@/components/ui/button'
import LLink from '@/components/ui/llink'
import Typography from '@/components/ui/typography'
import usePush from '@/hooks/usePush'
import { useUpdatePersoanlInfoMutation } from '@/redux/features/usersApi'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { ChevronLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function PersonalInfoPage() {
  const push = usePush()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm()

  const [profile_image, setprofile_image] = useState('')

  const [updateProfile, { isSuccess, isError, error }] = useUpdatePersoanlInfoMutation()

  useEffect(() => {
    if (isSuccess) {
      toast.success('Email verified successfully!')
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

      <Typography variant='h1' className='font-medium pt-10 pb-5'>
        Update Profile
      </Typography>
      <ProfilePhotoUploadComponent profile_image={profile_image} setprofile_image={setprofile_image} />
    </div>
  )
}
