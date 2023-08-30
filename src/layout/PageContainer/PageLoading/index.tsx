import React, { memo, FC } from 'react'
import styles from './index.module.less'
import { PageLoadingProps } from './const'

const Component: FC<PageLoadingProps> = () => {
  const loadingList = ['L', 'O', 'A', 'D', 'I', 'N', 'G', '...']
  // 有bug，主页会加载4次
  console.log('pageloading')

  return (
    <div className={styles.page}>
      {loadingList.map((item) => {
        return (
          <div key={item} className={styles.textItem}>
            {item}
          </div>
        )
      })}
    </div>
  )
}

const PageLoading = memo(Component)
export default PageLoading
