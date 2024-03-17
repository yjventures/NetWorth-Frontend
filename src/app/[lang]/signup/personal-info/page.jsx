'use client'

import usePush from '@/hooks/usePush'
import { useUpdatePersoanlInfoMutation } from '@/redux/features/usersApi'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function PersonalInfoPage() {
  const push = usePush()
  const [updateProfile, { isSuccess, isError, error }] = useUpdatePersoanlInfoMutation()

  useEffect(() => {
    if (isSuccess) {
      toast.success('Email verified successfully!')
      push('/add-card')
    }
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error, push])

  return <div>PersonalInfoPage</div>
}
