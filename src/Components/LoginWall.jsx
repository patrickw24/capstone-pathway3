import React from 'react'
import { Login } from '../ScreenComponents/Login'

export const LoginWall = () => {
  return (
    <div className="container d-flex justify-content-center">
    <div className="row border rounder-5 p-3 bg-white shadow box-area mt-5 w-50">
        <h1 className="text-center mt-5"> Database Log-In </h1>
        <div className="container w-50 mb-3 mt-2" style={{display:"flex",justifyContent:"center", minHeight:"10px", alignItems:"center" }}> <Login /> </div>
    </div>
    </div>
  )
}
