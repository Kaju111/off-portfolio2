import React from 'react'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBer from './components/NavBer'
import Home from './components/Home'
import SocialLink from './components/SocialLink'
import Work from './components/Work'

function App() {


  return (

    <Router>
    <NavBer/>
    <SocialLink/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/work' element={<Work/>}/>
        </Routes>
     {/* <Footer/>  */}
  </Router>

    // <div>
    
  
    //  <NavBer/>
    
    //   <Home/>
    
    //   <SocialLink/>
    //   <About/>
    //   <Work/>
    // </div>
  )
}

export default App

