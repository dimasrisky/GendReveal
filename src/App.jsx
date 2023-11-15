import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Form from './pages/Form'
import Results from './pages/Results'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/form' element={ <Form /> } />
        <Route path='/results/:username' element={ <Results /> } />
      </Routes>
    </Router>
  )
}

export default App