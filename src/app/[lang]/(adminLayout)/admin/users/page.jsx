'use client'

import SortingSigns from '@/components/common/admin/SortingSigns'
import { Button } from '@/components/ui/button'
import { Img } from '@/components/ui/img'
import { Skeleton } from '@/components/ui/skeleton'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useGetAllUsersQuery } from '@/redux/features/adminApi'
import { convertDateStr } from '@/utils/date/convertDateStr'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function UsersPage() {
  const [params, setparams] = useState({
    search: '',
    page: 1,
    limit: 10,
    sortBy: 'name',
    sortOrder: 'asc'
  })

  const { data, isLoading, isSuccess } = useGetAllUsersQuery()
  console.log(data)

  return (
    <div>
      {isLoading ? (
        <div className='flex flex-col gap-2'>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(el => (
            <Skeleton key={el} className='w-full h-16' />
          ))}
        </div>
      ) : null}
      {isSuccess ? (
        <>
          <Table className='w-full'>
            <TableHeader className='bg-neutral-50 h-16 text-text-primary-muted'>
              <TableRow>
                <TableHead>
                  <p className='flex items-center gap-2'>
                    User <SortingSigns params={params} setparams={setparams} sortField='name' />
                  </p>
                </TableHead>
                <TableHead>
                  <p className='flex items-center gap-2'>
                    Created At <SortingSigns params={params} setparams={setparams} sortField='createdAt' />
                  </p>
                </TableHead>
                <TableHead>
                  <p className='flex items-center gap-2'>
                    Verified <SortingSigns params={params} setparams={setparams} sortField='is_Verified' />
                  </p>
                </TableHead>
                <TableHead>
                  <p className='flex items-center gap-2'>Total Cards</p>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data?.map(user => (
                <TableRow key={user?._id}>
                  <TableCell>
                    <div className='flex items-center gap-2'>
                      {user?.personal_info?.profile_image ? (
                        <Img
                          src={user?.personal_info?.profile_image}
                          alt={user?.personal_info?.name}
                          className='w-11 h-11 object-cover rounded-xl'
                        />
                      ) : (
                        <p className='w-11 h-11 flex items-center justify-center rounded-xl bg-purple-200 text-purple-700 font-medium'>
                          {user?.personal_info?.name?.slice(0, 1)?.toUpperCase()}
                        </p>
                      )}
                      <div className='space-y-1'>
                        <p className='text-sm font-medium'>{user?.personal_info?.name}</p>
                        <p className='text-xs'>{user?.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p>{convertDateStr(user?.createdAt)}</p>
                  </TableCell>
                  <TableCell>{user?.is_verified ? 'Yes' : 'No'}</TableCell>
                  <TableCell>{user?.cards?.length}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className='w-full flex flex-wrap items-center justify-between gap-2 p-3 bg-gray-50'>
            <p className='text-sm font-medium'>Total Users: {data?.metadata?.totalRFQ}</p>

            <div className='flex items-center gap-2'>
              <p className='text-sm'>
                Page {data?.metadata?.currentPage} / {data?.metadata?.totalPage}
              </p>
              <Button
                className='flex items-center gap-1 pl-3 pr-5 py-2 w-auto disabled:bg-gray-extra-light disabled:cursor-not-allowed'
                variant='gray'
                onClick={() => setparams({ ...params, page: params.page - 1 })}
                disabled={params.page === 1}
              >
                <ChevronLeft className='w-5 h-5' /> Prev
              </Button>
              <Button
                className='flex items-center gap-1 pl-5 pr-3 py-2 w-auto disabled:bg-gray-extra-light disabled:cursor-not-allowed'
                variant='gray'
                disabled={params.page === data?.metadata?.totalPage}
                onClick={() => setparams({ ...params, page: params.page + 1 })}
              >
                Next
                <ChevronRight className='w-5 h-5' />
              </Button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}
