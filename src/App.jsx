import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { LoginWall } from './Components/LoginWall'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ReportWall } from './Components/ReportWall'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path= "/" element={<LoginWall />}></Route>   
      <Route path= "/report" element={<ReportWall />}></Route> 
              
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
