import React from 'react'
import { Button } from 'rebass'
import { auth } from '../utils/AuthService'
import { Link } from 'react-router'

const Public = () => {
  const handleClick = () => auth.signIn()

  return <div>
    <h2>Public</h2>
    <Button onClick={handleClick}>Sign In</Button>
    <Link to='/secret'>Secrets</Link>
  </div>
}

export default Public
