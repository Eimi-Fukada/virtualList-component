import React, { memo, FC } from 'react'
import styles from './index.module.less'
import { PageContainerProps } from './const'
import { judgmentNewPhone } from '~/utils/help'
import PageLoading from './PageLoading'
import ErrorBoundary from '../ErrorBoundary'

const Component: FC<PageContainerProps> = (props) => {
  const { noPlace = false, loading = false, children, ...rest } = props

  return (
    <ErrorBoundary>
      <div className={styles.page} {...rest}>
        {loading ? <PageLoading /> : children}

        {judgmentNewPhone() && !noPlace && (
          <div className={styles.spacingIphone} />
        )}
      </div>
    </ErrorBoundary>
  )
}

const PageContainer = memo(Component)
export default PageContainer
