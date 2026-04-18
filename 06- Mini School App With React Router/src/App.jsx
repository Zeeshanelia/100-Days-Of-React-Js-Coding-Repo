
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import Home from './Component/Home'
import Teacher from './Component/Teacher'
import ContactUs from './Component/ContactUs'
import Holiday from './Component/Holiday'
import NotFound from './Component/NotFound'
import Nav from './Component/Nav'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/nav' element={<Nav/> }/>
        <Route path='/teacher' element={<Teacher/> }/>
        <Route path='/holiday' element={<Holiday/>}/>
        <Route path='/contact-us' element={<ContactUs/> }/>
        <Route path='*' element={<NotFound/> }/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
