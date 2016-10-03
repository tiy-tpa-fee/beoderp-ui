import React, { PropTypes as T } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import routes from '../routes'

class Root extends React.Component {
  static propTypes = {
    store: T.object.isRequired,
    history: T.object.isRequired
  }

  render () {
    const { store, history } = this.props
    return <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  }
}

export default Root
