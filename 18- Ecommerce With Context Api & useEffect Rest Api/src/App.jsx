import Products from './Component/Products'
import Details from './Component/Details'
import UserContext from './Context/UserContext'
import './App.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom"

import { useState } from 'react'
export default function App() {

  const [ product, setProduct] = useState(null)

  return (<>
    <UserContext.Provider value={{ product ,setProduct }}>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Products />} />
          <Route path='/details' element={<Details />}   />
          <Route path='/products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  </>)
}