'use client'

import { AdminBreadcrumb } from '@/components/common/admin/AdminBreadcrumb'
import SortingSigns from '@/components/common/admin/SortingSigns'
import { Button } from '@/components/ui/button'
import ConfirmationPrompt from '@/components/ui/confirmation-prompt'
import { Img } from '@/components/ui/img'
import { SimpleInput } from '@/components/ui/simple-input'
import { Skeleton } from '@/components/ui/skeleton'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Typography from '@/components/ui/typography'
import useDebounce from '@/hooks/useDebounce'
import { useDeleteUserMutation, useGetAllUsersQuery } from '@/redux/features/adminApi'
import { convertDateStr } from '@/utils/date/convertDateStr'
import { rtkErrorMesage } from '@/utils/error/errorMessage'
import { ChevronLeft, ChevronRight, Search, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const pages = [{ id: 1, label: 'Users', href: '/admin/users', active: true }]

export default function UsersPage() {
  const [search, setsearch] = useState('')
  const debouncedVal = useDebounce(search, 750)
  const [params, setparams] = useState({
    page: 1,
    limit: 10,
    sortBy: 'name',
    sortOrder: 'asc'
  })

  const { data, isLoading, isSuccess } = useGetAllUsersQuery({ ...params, search: debouncedVal })

  const [openPrompt, setopenPrompt] = useState(false)
  const [deleteId, setdeleteId] = useState('')

  const [deleteUser, { isSuccess: isDeleteSuccess, isError, error }] = useDeleteUserMutation()

  useEffect(() => {
    if (isDeleteSuccess) toast.success('User deleted successfully!')
    if (isError) toast.error(rtkErrorMesage(error))
  }, [isDeleteSuccess, isError, error])

  return (
    <div>
      <AdminBreadcrumb pages={pages} />
      <Typography variant='h2' className='font-normal mt-5 mb-8'>
        All Users
      </Typography>
      {isLoading ? (
        <div className='flex flex-col gap-2'>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(el => (
            <Skeleton key={el} className='w-full h-16' />
          ))}
        </div>
      ) : null}
      {isSuccess ? (
        <>
          <SimpleInput
            value={search}
            onChange={e => setsearch(e.target.value)}
            placeholder='Search by name or email...'
            className='mb-2 max-w-sm h-11'
            icon={<Search />}
          />
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
                    Verified <SortingSigns params={params} setparams={setparams} sortField='is_verified' />
                  </p>
                </TableHead>
                <TableHead>
                  <p className='flex items-center gap-2'>Total Cards</p>
                </TableHead>
                <TableHead>Actions</TableHead>
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
                  <TableCell>
                    {user?.is_verified ? (
                      <p className='text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-lg inline-block font-medium'>
                        Verified
                      </p>
                    ) : (
                      <p className='text-red-700 bg-red-100 px-3 py-1.5 rounded-lg inline-block font-medium'>
                        Unverified
                      </p>
                    )}
                  </TableCell>
                  <TableCell>{user?.cards?.length}</TableCell>
                  <TableCell>
                    <Trash2
                      className='size-6 text-red-500 cursor-pointer'
                      onClick={() => {
                        setopenPrompt(true)
                        setdeleteId(user?._id)
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className='w-full flex flex-wrap items-center justify-between gap-2 p-3 bg-gray-50 mb-20'>
            <p className='text-sm font-medium'>Total Users: {data?.metaData?.totalUser}</p>

            <div className='flex items-center flex-wrap gap-2'>
              <p className='text-sm min-w-max'>
                Page {data?.metaData?.currentPage} / {data?.metaData?.totalPages}
              </p>
              <div className='flex items-center gap-2'>
                <Button
                  className='flex items-center gap-1 pl-3 pr-5 py-2 rounded-lg h-10 w-auto disabled:cursor-not-allowed'
                  variant='outline'
                  onClick={() => setparams({ ...params, page: params.page - 1 })}
                  disabled={params.page === 1}
                >
                  <ChevronLeft className='size-5' /> Prev
                </Button>
                <Button
                  className='flex items-center gap-1 pl-5 pr-3 py-2 h-10 rounded-lg w-auto  disabled:cursor-not-allowed'
                  variant='outline'
                  disabled={params.page === data?.metaData?.totalPages}
                  onClick={() => setparams({ ...params, page: params.page + 1 })}
                >
                  Next
                  <ChevronRight className='size-5' />
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <ConfirmationPrompt open={openPrompt} onOpenChange={setopenPrompt} cb={() => deleteUser(deleteId)} />
    </div>
  )
}
