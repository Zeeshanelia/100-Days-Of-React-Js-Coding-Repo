import { Login } from '../src/Login';
import { SignUp } from './SignUp';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import "animate.css";


function App() {


  return (
    <>
      <BrowserRouter>

        <div className="min-h-screen bg-gradient-to-t from-pupel-500 to-green-300  flex flex-col items-center justify-center">

          <div className=" max-w-full  mx-auto text-center  rounded-lg shadow-lg p-5 space-y-2 animate__animated animate__bounce">



            <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Our Application</h1>

            <p className="text-gray-600">Feel free to explore and modify the code to suit your needs.</p>

            <a href="/login" className="text-blue-500 hover:underline">Go to Login Page</a>

            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter >
    </>
  )
}

export default App


