import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { LoginWall } from './Components/LoginWall'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ReportWall } from './Components/ReportWall'
import { NavBar } from './ScreenComponents/Navbar'
import { AddEmployee } from './Components/AddEmployee'


function App() {

  let user= localStorage.getItem("username")

  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path= "/" element={<LoginWall />}></Route>   
      <Route path= "/report" element={<ReportWall username={user}/>}></Route> 
      <Route path= "/form" element={<AddEmployee />}></Route> 

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
