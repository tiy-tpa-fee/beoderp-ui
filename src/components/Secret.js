import React from 'react'
import { auth } from '../utils/AuthService'
import { Link } from 'react-router'

const Secret = () => {
  return <div>
    <h2>Secret!</h2>
    <p>Hello! {auth.profile.name}</p>
    <Link to='/'>Home</Link>
  </div>
}

export default Secret
