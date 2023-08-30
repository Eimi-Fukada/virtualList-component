import React, { memo, FC } from 'react'
import { VirtualListProps } from './const'
import styles from './index.module.less'

const Component: FC<VirtualListProps> = (props) => {
  const {} = props

  return <div className={styles.page} />
}

const VirtualList = memo(Component)
export default VirtualList
