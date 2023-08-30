import React, { Suspense } from 'react'
import PageLoading from '~/layout/PageContainer/PageLoading'

const lazyLoad = (
  Component: React.LazyExoticComponent<any>
): React.ReactNode => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Component />
    </Suspense>
  )
}

export default lazyLoad
