'use client'

import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

const Input = forwardRef(({ className, type, icon, ...props }, ref) => {
  return (
    <div className='relative'>
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          { 'pl-8': icon },
          className
        )}
        ref={ref}
        {...props}
      />
      {icon && (
        <div
          className={cn('absolute inset-y-0 left-2 top-0 flex items-center [&>svg]:size-5 text-muted-foreground', {})}
        >
          {icon}
        </div>
      )}
    </div>
  )
})
Input.displayName = 'Input'

export { Input }
