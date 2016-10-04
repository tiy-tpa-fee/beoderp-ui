import React from 'react'
import { Link } from 'react-router'
import { Fixed, NavItem, Space, Toolbar } from 'rebass'

const NavBar = (props) => {
  return <Fixed top left right>
    <Toolbar>
      <NavItem is={Link} to='/' children='BeoDERP' />
      <Space auto />
      <NavItem is={Link} to='/objects' children='Objects' />
    </Toolbar>
  </Fixed>
}

export default NavBar
