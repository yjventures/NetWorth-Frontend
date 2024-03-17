'use client'

import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

const Input = forwardRef(
  ({ className, type, icon, errors, register, name, hookFormConfig, label, required, ...props }, ref) => {
    return (
      <div className='pb-1'>
        <div className='relative'>
          <input
            type={type}
            className={cn(
              'flex h-14 w-full rounded-2xl border border-input bg-gray-50 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
              { 'pl-10': icon },
              className
            )}
            ref={ref}
            {...register(name, { required, ...hookFormConfig })}
            {...props}
          />
          {icon && (
            <div
              className={cn(
                'absolute inset-y-0 left-2.5 top-0 flex items-center [&>svg]:size-6 text-muted-foreground',
                {}
              )}
            >
              {icon}
            </div>
          )}
        </div>
        {required ? (
          <>
            {errors[name] && errors[name]?.type === 'required' ? (
              <span className='text-red-500 text-sm h-5 leading-none'>{label} is required</span>
            ) : (
              <div className='w-full h-6' />
            )}
          </>
        ) : null}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
