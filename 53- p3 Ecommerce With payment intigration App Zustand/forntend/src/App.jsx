import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from "./Component/Login"
import { ToastContainer } from 'react-toastify'
import {Dashboard} from "./Component/Admin/Dashboard"
import {AuthGuard} from './Component/AuthGuard'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />} />

          <Route element={<AuthGuard />}>
          <Route path='/admin'>
            <Route path='dashboard' element={<Dashboard />} />
          </Route>
          </Route>

        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
