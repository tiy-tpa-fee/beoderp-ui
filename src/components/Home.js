import React from 'react'
import { Button } from 'rebass'
import { auth } from '../utils/AuthService'

const Public = () => {
  const handleClick = () => auth.signIn()

  return <div style={{display: 'flex', justifyContent: 'center'}}>
    <Button onClick={handleClick}>Sign In</Button>
  </div>
}

export default Public
