import ConfirmationPrompt from '@/components/ui/confirmation-prompt'
import { useDeleteLinkMutation } from '@/redux/features/linksApi'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { SOCIAL_PLATFORMS } from '.'

export default function SingleLink({ platform, links, showDeleteButton = false }) {
  const link = links?.find(p => p.platform === platform)
  const linkWithIcon = SOCIAL_PLATFORMS?.find(p => p.platform === platform)

  const [showPrompt, setshowPrompt] = useState(false)
  const [deleteLink, { isSuccess, isError, error }] = useDeleteLinkMutation()

  useEffect(() => {
    if (isSuccess) toast.success('Link deleted successfully')
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isSuccess, isError, error])

  return (
    <>
      {link ? (
        <div className='flex items-center justify-between gap-2'>
          <div className='flex items-center gap-2'>
            <span>{linkWithIcon?.icon}</span>
            <a href={link?.link} target='_blank' rel='noreferrer' className='text-sky-700'>
              {link?.link}
            </a>
          </div>
          {showDeleteButton ? <X className='size-5 cursor-pointer' onClick={() => setshowPrompt(true)} /> : null}
        </div>
      ) : null}
      <ConfirmationPrompt
        open={showPrompt}
        title='Are you sure to delete this link?'
        onOpenChange={setshowPrompt}
        cb={() => deleteLink(link?._id)}
      />
    </>
  )
}
