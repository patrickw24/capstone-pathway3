import React from 'react'
import { Login } from '../ScreenComponents/Login'

export const LoginWall = () => {
  return (
    <div>
        <h1 className="text-center mt-5"> Database Log-In </h1>
        <div className="container w-50 mt-5" style={{display:"flex",justifyContent:"center", minHeight:"100px", alignItems:"center" }}> <Login /> </div>
    </div>
  )
}
