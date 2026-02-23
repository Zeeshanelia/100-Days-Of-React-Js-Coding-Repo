import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from "./Component/Login"
import { Dashboard } from './Component/admin/Dashboard';
import { AuthGuard } from './Component/AuthGuard';
import { ToastContainer } from 'react-toastify'
import { NotFound } from './Component/NotFound'
import {Layout} from './Component/admin/Layout';
import {Orders} from './Component/admin/Orders'
import {Customers} from './Component/admin/Customers'
import {Products} from './Component/admin/Products'
import {Settings} from './Component/admin/Settings'

function App() {

  return (<>
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard />}>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="customers" element={<Customers />} />
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<Products />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </>
  )
}

export default App
