import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './Components/Add'
import View from './Components/View'
import Update from './Components/Update'
import Experience from './Components/Experience'
import AddExp from './Components/AddExp'
import ExpUpdate from './Components/ExpUpdate'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Add/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/view' element={<View/>}/>
          <Route path='/update/:id' element={<Update/>}/>
          <Route path='/addExp' element={<AddExp/>}/>
          <Route path='/expUpdate/:id' element={<ExpUpdate/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App