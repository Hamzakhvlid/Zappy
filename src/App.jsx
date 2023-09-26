import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hero, Navbar } from './components'
import LoginPage from './components/loginPage'
import SignUpPage from './components/signUp'
import RoundBox from './components/roundBox'
import Sampledata from './components/data'
import MenuPage from './components/menuPage'
import Main from './components/Main'


function App() {
  

  console.log(Sampledata['menu']);

  return (
    <div  className="bg-[#FFD700] w-full ">
      <Navbar/>
      
     <Hero/>
    </div>);
}

export default App
