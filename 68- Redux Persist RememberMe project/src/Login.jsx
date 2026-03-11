import React from 'react'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUser, removeUser } from "./redux/slices/login-slice"

const Login = () => {
  const {loginSlice} = useSelector((allData)=>allData)
  const dispath = useDispatch()
  const [formValue, setFormValue] = useState({
    username: loginSlice ? loginSlice.username : '',
    password: loginSlice ? loginSlice.password : ''
  })

  const handleInput = (e)=>{
    const input = e.target
    const name = input.name
    const value = input.value
    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  const login = (e)=>{
    e.preventDefault()
    console.log(formValue)
  }

  const rememberMe = (e)=>{
    const input = e.target
    if(input.checked)
    {
      dispath(setUser(formValue))
    }
    else {
      dispath(removeUser())
    }
  }

  return (
    <div className="bg-rose-600 flex items-center justify-center h-screen">
        <div className="bg-white rounded-lg shadow-lg p-6 w-[450px]">
          <form className="space-y-4" onSubmit={login}>
            <div className="flex flex-col">
              <label className="font-medium text-lg mb-2">Username</label>
              <input 
                className="border border-gray-300 rounded p-3"
                name="username"
                placeholder="@Username"
                type="email"
                required
                value={formValue.username}
                onChange={handleInput}
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-lg mb-2">Password</label>
              <input 
                className="border border-gray-300 rounded p-3"
                name="password"
                placeholder="*******"
                type="password"
                required
                value={formValue.password}
                onChange={handleInput}
              />
            </div>

            <div className="flex gap-3 items-center">
              <input type="checkbox" onChange={rememberMe} checked={loginSlice ? true : false} />
              <label>Remember Me !</label>
            </div>

            <button className="bg-indigo-600 py-3 px-8 rounded text-white">Login</button>
          </form>
        </div>
      </div>
  )
}

export default Login
