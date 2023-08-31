import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hero, Navbar } from './components'


function App() {
  

  return (

    <div  id="screen">
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
