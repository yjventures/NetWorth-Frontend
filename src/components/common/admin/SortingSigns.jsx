import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react'

export default function SortingSigns({ params, setparams, sortField }) {
  return (
    <>
      {params.sortBy === sortField ? (
        <>
          {params.sortOrder === 'asc' ? (
            <ArrowUp
              className='w-4 h-4 cursor-pointer'
              onClick={() => setparams({ ...params, sortBy: sortField, sortOrder: 'desc' })}
            />
          ) : (
            <ArrowDown
              className='w-4 h-4 cursor-pointer'
              onClick={() => setparams({ ...params, sortBy: sortField, sortOrder: 'asc' })}
            />
          )}
        </>
      ) : (
        <ArrowUpDown
          className='w-4 h-4 cursor-pointer'
          onClick={() => setparams({ ...params, sortBy: sortField, sortOrder: 'asc' })}
        />
      )}
    </>
  )
}
