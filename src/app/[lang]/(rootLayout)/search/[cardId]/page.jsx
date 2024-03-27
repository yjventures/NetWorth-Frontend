'use client'

import BackLink from '@/components/common/rootLayout/BackLink'
import SearchCard from '@/components/pages/search/SearchCard'
import SearchFilters from '@/components/pages/search/SearchFilters'
import { SimpleInput } from '@/components/ui/simple-input'
import { Skeleton } from '@/components/ui/skeleton'
import Typography from '@/components/ui/typography'
import useDebounce from '@/hooks/useDebounce'
import { useSearchContactsQuery } from '@/redux/features/contactsApi'
import { Search } from 'lucide-react'
import { useState } from 'react'

export default function SearchPage() {
  const initialSearchParams = {
    search: '',
    country: '',
    city: '',
    designation: ''
  }

  const [params, setparams] = useState(initialSearchParams)
  const search = useDebounce(params.search, 750)
  const country = useDebounce(params.country, 750)
  const city = useDebounce(params.country, 750)
  const designation = useDebounce(params.designation, 750)

  const allFilters = { search, country, city, designation }

  const { data, isSuccess, isFetching } = useSearchContactsQuery(allFilters)

  return (
    <div className='py-10 container'>
      <div className='flex items-center gap-3 justify-between'>
        <div className='flex items-center gap-3'>
          <BackLink href='/' className='rounded-full' />
          <Typography variant='h3' className='font-medium'>
            Search
          </Typography>
        </div>
        <SearchFilters params={params} setparams={setparams} />
      </div>
      <SimpleInput
        placeholder='Search'
        value={params.search}
        onChange={e => setparams({ ...params, search: e.target.value })}
        icon=<Search />
        iconPosition='right'
        className='mt-5'
      />

      {isFetching ? (
        <div className='grid grid-cols-2 gap-5 pt-6'>
          {[
            ...Array(6)
              .fill()
              .map((_, i) => <Skeleton key={i} className='w-full h-64' />)
          ]}
        </div>
      ) : null}

      {isSuccess ? (
        <div className='grid grid-cols-2 gap-5 pt-6'>
          {data?.data?.map(card => (
            <SearchCard key={card?._id} card={card} />
          ))}
        </div>
      ) : null}
    </div>
  )
}
