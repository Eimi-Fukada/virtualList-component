import React, { Suspense } from 'react'
import './App.less'
import { HashRouter, useNavigationType, useLocation } from 'react-router-dom'
import PageLoading from './layout/PageContainer/PageLoading'
import routes from './routes'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Router } from './routes/renderRoutes'

const ANIMATION_MAP = {
  PUSH: 'forward',
  POP: 'back',
}

const TransitionRoutes = () => {
  const location = useLocation()
  const navigate = useNavigationType()
  type navigateType = keyof typeof ANIMATION_MAP

  return (
    <TransitionGroup
      className={'router-wrapper'}
      childFactory={(child) =>
        React.cloneElement(child, {
          classNames: ANIMATION_MAP[navigate as navigateType],
        })
      }
      appear={false}
    >
      <CSSTransition timeout={500} key={location.pathname}>
        <div className={'box'}>
          <Router routes={routes} location={location} />
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}

function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <HashRouter>
        <TransitionRoutes />
      </HashRouter>
    </Suspense>
  )
}

export default App
