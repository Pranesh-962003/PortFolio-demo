import React from 'react'
import Main from '../Components/Main'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Experience from '../Components/Experience'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div className='container mx-auto w-[95%] mt-4'>
      
      <Navbar/>
      <Main/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Footer/>
    </div>
  )
}

export default Home