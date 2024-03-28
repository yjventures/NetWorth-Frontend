'use client'

import { useParams } from 'next/navigation'
import QRCode from 'react-qr-code'

export default function ShareCardPage() {
  const { cardId } = useParams()
  return (
    <div className='flex items-center justify-center h-screen'>
      <QRCode value={`/cards/${cardId}?from=share`} />
    </div>
  )
}
