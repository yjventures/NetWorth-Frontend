'use client'

import { API_URL } from '@/configs'
import { cn } from '@/lib/utils'
import axios from 'axios'
import { ImagePlus } from 'lucide-react'
import { useRef } from 'react'
import toast from 'react-hot-toast'
import { Button } from './button'

const DndMultipleUpload = ({ setUploadURL, icon, label, className, buttonLabel, cb = () => {}, ...rest }) => {
  const inputBtnRef = useRef(null)

  const handleFiles = files => {
    uploadFiles(files)
  }

  const handleDrop = e => {
    e.preventDefault()
    const files = Array.from(e.dataTransfer.files)
    if (files.length) {
      handleFiles(files)
    }
  }

  const handleChange = e => {
    const files = Array.from(e.target.files)
    if (files.length) {
      handleFiles(files)
    }
  }

  const handleButtonClick = () => {
    inputBtnRef.current.click()
  }

  const uploadFiles = async files => {
    try {
      toast.success('Uploading files, please wait...')
      const responses = await Promise.all(
        files.map(file => {
          const formData = new FormData()
          formData.append('file', file)
          return axios.post(`${API_URL}/upload`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
        })
      )

      const uploadedUrls = responses.map(response => response?.data?.uploadedUrl)
      setUploadURL(uploadedUrls)
      cb(response?.data?.uploadedUrl)
      toast.success('Files uploaded successfully!')
    } catch (error) {
      console.error('Error uploading files', error)
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
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='p-3.5 bg-secondary rounded-full'>
            {icon ? icon : <ImagePlus className='text-primary' size={20} strokeWidth={2} />}
          </div>
          <p>{label ? label : 'Drag and drop file here, or click the button below to select file'}</p>
        </div>
      </div>
      <input
        type='file'
        ref={inputBtnRef}
        onChange={handleChange}
        className='hidden'
        multiple
        id='file-upload'
        {...rest}
      />
      <Button onClick={handleButtonClick} variant='secondary' className='h-10 rounded-md'>
        {buttonLabel || 'Select Files'}
      </Button>
    </div>
  )
}

export default DndMultipleUpload
