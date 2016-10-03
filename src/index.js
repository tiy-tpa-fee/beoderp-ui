import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './containers/Root'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store'
import { browserHistory } from 'react-router'
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const render = (app) => {
  ReactDOM.render(
    <AppContainer>{app}</AppContainer>,
    document.getElementById('root')
  )
}

if (module.hot) {
  const log = console.error
  console.error = (...args) => { // eslint-disable-line no-console
    if (!(args && args.length === 1 && typeof args[0] === 'string' && args[0].indexOf('You cannot change <Router routes>') > -1)) {
      log.apply(console, args)
    }
  }

  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default
    render(<NextRoot store={store} history={history} />)
  })
}

render(<Root store={store} history={history} />)
