import React from 'react'
import { Fixed, Space, Toolbar } from 'rebass'

const NavBar = (props) => {
  return <Fixed top left right>
    <Toolbar>
      <Space />
    </Toolbar>
  </Fixed>
}

export default NavBar
