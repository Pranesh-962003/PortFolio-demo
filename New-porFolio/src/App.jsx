import React from 'react'
import Home from './Pages/Home'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from './Components/Contact'


const App = () => {
  return (
    <div>
     
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App