import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { auth } from './utils/AuthService'
import { App, Home, Objects } from './components/'

const redirectUser = (nextState, replace) => {
  if (auth.isSignedIn) {
    replace({ pathname: '/objects' })
  }
}

const requireAuth = (nextState, replace) => {
  if (!auth.isSignedIn) {
    replace({ pathname: '/' })
  }
}

const routes = <Route path='/' component={App}>
  <IndexRoute component={Home} onEnter={redirectUser} />
  <Route path='objects' component={Objects} onEnter={requireAuth} />
</Route>

export default routes
