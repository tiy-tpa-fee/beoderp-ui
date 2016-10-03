import React from 'react'
import { Link } from 'react-router'
import { Fixed, NavItem, Space, Toolbar } from 'rebass'

const NavBar = (props) => {
  return <Fixed top left right>
    <Toolbar>
      <Space />
      <NavItem is={Link} to='/objects'>Objects</NavItem>
    </Toolbar>
  </Fixed>
}

export default NavBar
