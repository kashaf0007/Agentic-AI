import React from 'react'
import Navbar from './Components/Navbar'
import AI from './Components/AI'
import Neutral from './Components/Neutral'
import Solution from './Components/AI-solution'
import { Contact } from './Components/Contact'
import Footer from './Components/Footer'
import Price from './Components/Price'
import Hero from './Components/Hero'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AI/>
      <Neutral/>
      <Solution/>
      <Price/>
      <Contact/>
    
      <Footer/>
    </div>
  )
}

export default Home
