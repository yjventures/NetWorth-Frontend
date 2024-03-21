'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { getLocaleLang } from '@/utils/i18n/get-locale-lang'

export function AdminBreadcrumb({ pages }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={`/${getLocaleLang()}/admin/dashboard`}>Admin Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {pages.map(page => (
          <>
            {page.active ? (
              <BreadcrumbItem>
                <BreadcrumbPage>{page.label}</BreadcrumbPage>
              </BreadcrumbItem>
            ) : (
              <>
                <BreadcrumbItem key={page.id}>
                  <BreadcrumbLink href={`/${getLocaleLang()}${page.href}`}>{page.label}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            )}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
