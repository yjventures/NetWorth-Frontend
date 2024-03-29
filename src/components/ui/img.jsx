import { cn } from '@/lib/utils'
import Image from 'next/image'

const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)}/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

export function Img({
  src,
  alt,
  width = 500,
  height = 500,
  sizes = '40vw',
  className,
  activePlaceholder = false,
  ...rest
}) {
  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      width={width}
      height={height}
      className={cn('w-full h-auto block', className)}
      placeholder={activePlaceholder ? 'blur' : 'empty'}
      loading='lazy'
      blurDataURL={rgbDataURL(237, 181, 6)}
      {...rest}
    />
  )
}
