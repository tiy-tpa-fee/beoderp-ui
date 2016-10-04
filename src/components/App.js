import React, { Component, PropTypes as T } from 'react'
import { Container } from 'rebass'
import NavBar from './NavBar'

class App extends Component {
  static propTypes = {
    children: T.element.isRequired
  }

  static childContextTypes = {
    rebass: T.object
  }

  getChildContext () {
    return {
      rebass: {
        fontFamily: 'Noto Serif'
      }
    }
  }

  render () {
    return <div>
      <NavBar />
      <Container>
        {this.props.children}
      </Container>
    </div>
  }
}

export default App
