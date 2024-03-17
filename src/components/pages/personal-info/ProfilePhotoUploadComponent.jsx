import avatar from '@/assets/images/common/avatar.png'
import { Img } from '@/components/ui/img'
import { API_URL } from '@/configs'
import axios from 'axios'
import { Pencil } from 'lucide-react'
import { useRef } from 'react'
import toast from 'react-hot-toast'

export default function ProfilePhotoUploadComponent({ profile_image, setprofile_image }) {
  const inputBtnRef = useRef(null)

  const handleChange = e => {
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
        setprofile_image(response?.data?.uploadedUrl)
      }
    } catch (error) {
      console.error('Error uploading file', error)
    }
  }
  return (
    <div className='flex flex-col items-center gap-1'>
      <input type='file' ref={inputBtnRef} onChange={handleChange} accept='image/*' className='hidden' />
      {profile_image ? (
        <Img src={profile_image} alt='User photo' className='size-24 object-cover rounded-full' />
      ) : (
        <Img src={avatar} alt='User photo' className='size-24 object-cover rounded-full' />
      )}

      <div
        className='flex items-center gap-1 text-text-primary cursor-pointer text-sm'
        onClick={() => inputBtnRef.current.click()}
      >
        <Pencil className='w-3.5 h-3.5' />
        <p>{profile_image ? 'Update' : 'Upload'}</p>
      </div>
    </div>
  )
}
