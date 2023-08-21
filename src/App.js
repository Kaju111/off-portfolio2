import React from 'react'
import NavBer from './components/NavBer'
import Home from './components/Home'
import Particles from "react-tsparticles"
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import { loadFull } from 'tsparticles'
import About from './components/About'
import particles from './units/particles'

function App() {

  // const location = useLocation

  const handleInit = async (main) =>{
    await loadFull(main)
  }

    // const Homepage = location.pathname === "/";
  

  return (
    <div>
    
    <Particles id='particles' options={particles} init={handleInit}/>


     <NavBer/>
    <div className='Homepage'>
      <Home/>
    </div>

    
    </div>
  )
}

export default App

