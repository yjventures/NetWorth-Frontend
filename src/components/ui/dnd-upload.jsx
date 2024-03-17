'use client'

import { API_URL } from '@/configs'
import { cn } from '@/lib/utils'
import axios from 'axios'
import { ImagePlus } from 'lucide-react'
import { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { Button } from './button'

const DnDUpload = ({ setUploadURL, icon, label, buttonLabel, className, ...rest }) => {
  const [file, setfile] = useState(null)
  const inputBtnRef = useRef(null)

  const handleDrop = e => {
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files.length) {
      setfile(files[0])
      uploadFile(files[0])
    }
  }

  const handleChange = e => {
    const files = e.target.files
    if (files.length) {
      setfile(files[0])
      uploadFile(files[0])
    }
  }

  const handleButtonClick = () => {
    inputBtnRef.current.click()
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

      if (response?.data?.status === 'success') {
        toast.success('File uploaded successfully!')
        setUploadURL(response?.data?.uploadedUrl)
      }
    } catch (error) {
      console.error('Error uploading file', error)
    }
  }

  return (
    <div
      className={cn(
        'border-2 rounded-2xl border-dashed p-5 sm:p-10 text-center flex flex-col items-center justify-center',
        className
      )}
      onDrop={handleDrop}
      onDragOver={e => e.preventDefault()}
    >
      <div className='pb-4'>
        {file ? (
          <p>{file.name}</p>
        ) : (
          <div className='flex flex-col items-center justify-center gap-4'>
            <div className='p-3.5 bg-secondary rounded-full'>
              {icon ? icon : <ImagePlus className='text-primary' size={20} strokeWidth={2} />}
            </div>
            <p>{label ? label : 'Drag and drop file here, or click the button below to select file'}</p>
          </div>
        )}
      </div>
      <input type='file' ref={inputBtnRef} onChange={handleChange} className='hidden' id='file-upload' {...rest} />
      <Button onClick={handleButtonClick} variant='secondary' className='h-10 rounded-md'>
        {buttonLabel || 'Select File'}
      </Button>
    </div>
  )
}

export default DnDUpload
