import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Veg from './Veg'
import Nonveg from './Nonveg'
import Milk from './Milk'
import Groceries from './groceries'


function App() {
  return (
    <>
      <BrowserRouter>
      <Link to='/Veg'>Veg Items</Link>
      <Link to='/Nonveg'>NonVeg Items</Link>
      <Link to='/Milk'>Milk Items</Link>
      <Link to='/Groceries'>Grocery Items</Link>


      <Routes>
        <Route path='/Veg' element={<Veg/>}/>
        <Route path='/Nonveg' element={<Nonveg/>}/>
        <Route path='/Milk' element={<Milk/>}/>
        <Route path='/Groceries' element={<Groceries/>}/>
      </Routes>

      </BrowserRouter>
    
      
    </>
  )
}


export default App
