import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { auth } from './utils/AuthService'
import { App, Public, Secret } from './components/'

const requireAuth = (nextState, replace) => {
  if (!auth.isSignedIn) {
    replace({ pathname: '/' })
  }
}

const routes = <Route path='/' component={App}>
  <IndexRoute component={Public} />
  <Route path='secret' component={Secret} onEnter={requireAuth} />
</Route>

export default routes
