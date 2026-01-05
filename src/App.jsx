import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './component/Main' 
import { Route, Routes } from 'react-router-dom'
import Hero from './component/Hero'
import About from './component/About'



function App() {
  

  return (
    <>
<Main/>
      <Routes>
        <Route path="/" element={<Hero/>}></Route>
        <Route path="/About" element={<About/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
