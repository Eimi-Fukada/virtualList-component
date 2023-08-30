import React, { memo, FC } from 'react'
import { HomeProps } from './const'
import PageContainer from '~/layout/PageContainer'
import styles from './index.module.less'
import { useViewModel } from './viewModel'

const Component: FC<HomeProps> = () => {
  const {} = useViewModel()

  return (
    <PageContainer>
      <div className={styles.page}>123123</div>
    </PageContainer>
  )
}

const Home = memo(Component)
export default Home
