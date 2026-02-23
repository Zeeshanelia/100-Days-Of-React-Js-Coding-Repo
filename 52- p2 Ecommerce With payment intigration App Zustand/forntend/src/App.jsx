import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AdminLogin } from "./Component/Admin/AdminLogin"
import { ToastContainer } from 'react-toastify'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/admin'>
            <Route path='login' element={<AdminLogin />} />
          </Route>
        </Routes>

        <ToastContainer/>
      </BrowserRouter>


      {/* <div className='min-h-screen bg-gray-200 py-5'>
        <section className='ml-[300px] bg-red-200 py-12'>

        </section>
      </div> */}
    </>
  )
}

export default App
