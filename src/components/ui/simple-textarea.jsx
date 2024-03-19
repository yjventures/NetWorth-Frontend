'use client'

import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

const SimpleTextarea = forwardRef(({ className, type, rows, icon, ...rest }, ref) => {
  return (
    <textarea
      type={type}
      className={cn(
        'flex w-full rounded-lg border border-input bg-gray-50 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        { 'pl-10': icon },
        className
      )}
      rows={rows}
      ref={ref}
      {...rest}
    />
  )
})
SimpleTextarea.displayName = 'SimleTextarea'

export { SimpleTextarea }
