import { lazy } from 'react'
import lazyLoad from './LazyLoad'
import { IRouteObject } from './routesInterface'

const Home = lazy(() => import('~/pages/home'))

const routes: IRouteObject[] = [
  {
    index: true,
    element: lazyLoad(Home),
  },
]

export default routes
